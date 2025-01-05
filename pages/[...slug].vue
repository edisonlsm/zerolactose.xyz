<template>
  <div class="m-6 lg:m-8">
    <ContentRenderer v-if="data" :value="data">
      <article class="prose prose-base lg:prose-lg xl:prose-xl">
        <h1>{{ data!.title }}</h1>
        <ContentRendererMarkdown :value="data"  />
      </article>
    </ContentRenderer>
    <span v-else>{{ error?.statusMessage }}</span>
  </div>
 
</template>

<script setup lang="ts">
const route = useRoute();

const { data, error } = useAsyncData('doc', () => queryContent(route.path).findOne())

useSeoMeta({
  title: () => `Receitas Zero Lactose`,
  ogTitle: () => `Receitas Zero Lactose`,
  description: () => data.value?.title,
  ogDescription: () => data.value?.title,
})
</script>

<style lang="postcss">
.footnote {
  @apply text-sm text-gray-600
}
</style>