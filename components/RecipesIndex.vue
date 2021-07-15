<template>
  <div v-if="!$fetchState.pending && !$fetchState.error" class="my-2">
    <span class="text-xl mx-6 font-bold text-zero-orange text-lg">
      Receitas
    </span>
    <ul class="flex flex-wrap">
      <li
        v-for="recipe of recipes"
        :key="recipe.slug"
        class="mx-8 my-2"
      >
        <!-- <span
          v-if="currentSlug == recipe.slug"
          class="text-lg flex text-zero-orange"
        >
          {{ recipe.title }}
        </span> -->
        <NuxtLink
          :to="{ name: 'slug', params: { slug: recipe.slug } }"
          class="text-lg flex"
          exact-active-class="text-zero-orange"
        >
          <h4>{{ recipe.title }}</h4>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch () {
    // Fetch the recipes from the nuxt-content store
    const recipes = await this.$content('recipes')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('title', 'asc')
      .fetch()

    this.recipes = recipes

    // Set the current slug from the page params
    // const currentSlug = this.$nuxt.context.params.slug

    // this.currentSlug = currentSlug

    // if (typeof currentSlug !== 'undefined' && currentSlug != null) {
    //   // If the current slug is not nil,
    //   //  sort the recipes array to move the current recipe to the front
    //   const sortedRecipes = recipes.sort(function (x, y) {
    //     return x.slug === currentSlug ? -1 : y === currentSlug ? 1 : 0
    //   })

    //   this.recipes = sortedRecipes
    //   this.currentSlug = currentSlug
    // } else {
    //   this.recipes = recipes
    // }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
