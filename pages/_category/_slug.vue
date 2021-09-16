<template>
  <div>
    <!-- Workaround to show the correct padding for the header on top of the page -->
    <ZeroHeader class="opacity-0" />
    <div class="lg:flex h-full mb-16 lg:mb-0">
      <!-- FIXED DESKTOP MENU -->
      <!-- SHOWS FROM LG AND ABOVE -->
      <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
        <RecipesIndex />
      </div>
      <div>
        <article class="m-8 prose prose-sm md:prose lg:prose-lg xl:prose-xl">
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

    const path = this.$route.path
    this.recipe = this.recipeByPath(path)
  },
  data () {
    return {
      recipe: undefined
    }
  },
  computed: {
    ...mapGetters('recipe', ['recipes', 'recipeByPath'])
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

<style>
  .nuxt-content code::before, .nuxt-content code::after {
    content: '';
  }

  .nuxt-content code {
    color: black !important;
    font-size: 0.75rem !important;
    font-weight: 400 !important;
  }
</style>
