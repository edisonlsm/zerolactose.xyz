<template>
  <div class="lg:flex h-full mb-16 lg:mb-0">
    <!-- FIXED DESKTOP MENU -->
    <!-- SHOWS FROM LG AND ABOVE -->
    <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
      <RecipesIndex />
    </div>
    <div>
      <article class="m-6 prose prose-blue prose-sm sm:prose lg:prose-lg xl:prose-2xl">
        <h1 class="text-4xl font-bold">
          {{ recipe.title }}
        </h1>
        <!-- <p>{{ recipe.description }}</p> -->
        <nuxt-content
          :document="recipe"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const recipe = await $content(params.slug).fetch()

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
