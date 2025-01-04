<template>
  <ContentDir :dir="data!.dir" />
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import type { ContentDir } from '~/types/content_dir';

const { data } = await useAsyncData('home', async () => {
  const contentList = await queryContent().find()

  const dir = { path: '/', children: [] } as ContentDir

  for (var content of contentList) {
    const splitPath = content._path!.split('/').filter((p) => p && p !== '');
    setContentFolderHierarchy(dir, content, splitPath);
  }

  return {
    contentList,
    dir
  }
})

function setContentFolderHierarchy(contentDir: ContentDir, content: ParsedContent, paths: string[]) {
  if (paths.length > 1) {
    // If it's not the last path, it's a folder!
    const currentPath = paths[0];
    // Check if folder already exists
    const folderExists = contentDir.children.find((c) => c.path == currentPath) !== undefined;
    if (!folderExists) {
      // Create if not exists
      contentDir.children.push({ path: currentPath, children: []})
    }
    // Continue to create child on folder
    setContentFolderHierarchy(contentDir.children.find((c) => "path" in c && c.path == currentPath) as ContentDir, content, paths.slice(1))
  }
  else {
    // The last path is the file. So, add file to dir!
    contentDir.children.push(content)
  }
}
</script>