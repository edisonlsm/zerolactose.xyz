<template>
  <div class="pl-4 pr-2">
    <div v-for="content in contents" :key="content._path">
      <span v-if="isCurrentContent(content)" class="font-bold underline text-base text-orange-400">
        {{ content.title }}
      </span>
      <a v-else :href="content._path" class="hover:underline font-bold text-base">
        {{ content.title }}
      </a>
    </div>
    <div v-for="directory in directories" :key="directory.path">
      <span class="block my-2 text-gray-500 capitalize text-2xl">{{ directory.path }}</span>
      <ContentDir :dir="directory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import type { ContentDir } from '~/types/content_dir';

const route = useRoute()

const props = defineProps<{
  dir: ContentDir
}>();

const directories = computed(() => props.dir.children.flatMap((c) => "path" in c ? <ContentDir> c : []))
const contents = computed(() => props.dir.children.flatMap((c) => "_path" in c ? <ParsedContent> c : []))

function isCurrentContent(content: ParsedContent) {
  return content._path === route.path
}
</script>