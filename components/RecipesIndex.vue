<template>
  <div v-if="!$fetchState.error" class="my-4">
    <span class="mx-6 font-bold text-zero-orange text-2xl">
      Todas as receitas
    </span>
    <ul class="flex flex-wrap mt-2">
      <li
        v-for="recipe of recipes"
        :key="recipe.slug"
        class="mx-8 my-2"
      >
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
  },
  data () {
    return {
      recipes: []
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
