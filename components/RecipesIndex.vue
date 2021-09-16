<template>
  <div v-if="!$fetchState.error" class="my-4">
    <div
      v-for="category in categories"
      :key="category.name"
    >
      <span
        class="block mx-6 font-bold text-zero-orange text-2xl"
      >
        {{ category.name }}
      </span>
      <ul class="flex flex-wrap my-2">
        <li
          v-for="recipe in category.recipes"
          :key="recipe.slug"
          class="mx-8 my-2"
        >
          <NuxtLink
            :to="recipe.path"
            class="text-lg flex"
            exact-active-class="text-zero-orange"
          >
            <h4>{{ recipe.title }}</h4>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    if (!this.recipes || this.recipes.length === 0) {
      // Need to fetch the data on the store
      await this.fetchRecipes()
    }
  },
  computed: {
    ...mapGetters('recipe', ['recipes', 'categories'])
  },
  methods: {
    ...mapActions(
      'recipe', {
        fetchRecipes: 'fetch'
      }
    )
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
