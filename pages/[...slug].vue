<template>
  <div class="m-safe-offset-6 m-6 lg:m-safe-offset-8">
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

definePageMeta({
  layout: 'content'
})

useSeoMeta({
  title: () => data.value!.title!,
  ogTitle: () => data.value!.title!,
  description: () => `Receitas Zero Lactose`,
  ogDescription: () => `Receitas Zero Lactose`,
})
</script>

<style lang="postcss">
.footnote {
  @apply text-sm text-gray-600
}
</style>