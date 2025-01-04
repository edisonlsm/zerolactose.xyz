<template>
  <div class="pl-4">
    <div v-for="content in contents" :key="content._path">
      <NuxtLink class="text-orange-400" :to="content._path">
        {{ content.title }}<br />
      </NuxtLink>
    </div>
    <div v-for="directory in directories" :key="directory.path">
      {{ directory.path }}
      <ContentDir :dir="directory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import type { ContentDir } from '~/types/content_dir';

const props = defineProps<{
  dir: ContentDir
}>();

const directories = computed(() => props.dir.children.flatMap((c) => "path" in c ? <ContentDir> c : []))
const contents = computed(() => props.dir.children.flatMap((c) => "_path" in c ? <ParsedContent> c : [])) 
</script>