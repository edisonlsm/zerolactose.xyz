<template>
  <div class="lg:flex h-full mb-16 lg:mb-0">
    <!-- FIXED DESKTOP MENU -->
    <!-- SHOWS FROM LG AND ABOVE -->
    <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
      <TableOfContents />
    </div>
    <div class="m-8">
      <ContentRenderer v-if="data" :value="data">
        <!-- <h6 class="prose prose-sm md:prose lg:prose-lg xl:prose-xl">{{ data!.title }}</h6> -->
        <ContentRendererMarkdown :value="data" class="prose prose-sm md:prose lg:prose-lg xl:prose-xl" />
      </ContentRenderer>
      <span v-else>{{ error?.statusMessage }}</span>
    </div>
  </div>
 
</template>

<script setup lang="ts">
const route = useRoute();

const { data, error } = useAsyncData('doc', () => queryContent(route.path).findOne())
</script>