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
        <NuxtLink
          :to="{ name: 'slug', params: { slug: recipe.slug } }"
          class="text-lg flex"
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
    this.recipes = await this.$content('recipes')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
