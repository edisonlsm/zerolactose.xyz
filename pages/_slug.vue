<template>
  <article class="m-6 prose prose-blue prose-sm sm:prose lg:prose-lg xl:prose-2xl">
    <h1 class="text-4xl font-bold">
      {{ recipe.title }}
    </h1>
    <!-- <p>{{ recipe.description }}</p> -->
    <nuxt-content
      :document="recipe"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const recipe = await $content('recipes', params.slug).fetch()

    return { recipe }
  }
}
</script>

<style>
  /* .nuxt-content h1 {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  } */
  /* .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  } */
</style>
