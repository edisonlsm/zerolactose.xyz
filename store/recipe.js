/**
 * @typedef { import("@nuxt/types").Context } NuxtContext
 * @typedef { import("@nuxt/content") }
 * @typedef { import("@nuxt/content/types/content").IContentDocument } NuxtContentDocument
 *
 * @typedef { {
 *    name: String,
 *    recipes: NuxtContentDocument[]
 * } } RecipeCategory
 * @typedef { {
 *    categories: RecipeCategory[],
 *    recipes: NuxtContentDocument[]
 * } } RecipeStoreState
 */

/** @returns { RecipeStoreState } */
export const state = () => ({
  categories: [],
  recipes: []
})

export const actions = {
  /**
   * @this NuxtContext
   */
  async fetch (store) {
    // Fetch the recipes from the nuxt-content store
    /** @type { NuxtContentDocument[] } */
    const recipes = await this.$content({ deep: true })
      .sortBy('category', 'title', 'asc')
      .fetch()

    store.commit('setRecipes', { recipes })

    store.dispatch('categorizeRecipes')
  },

  categorizeRecipes (store) {
    // Get all categories present on the recipes array
    /** @type { NuxtContentDocument[] } */
    const recipes = store.getters.recipes
    const categoriesNames = recipes.map(r => r.category)
    const uniqueCategories = [...new Set(categoriesNames)]

    const categories = []

    uniqueCategories.forEach((cat) => {
      // Get all recipes for this category
      let catRecipes = recipes.filter(r => r.category === cat)

      catRecipes = catRecipes.sort((ra, rb) => ra.title.localeCompare(rb.title))

      const categoryObj = {
        name: cat,
        recipes: catRecipes
      }

      categories.push(categoryObj)
    })

    store.commit('setCategories', { categories })
  }
}

export const mutations = {
  setRecipes (state, { recipes }) {
    state.recipes = recipes
  },
  setCategories (state, { categories }) {
    state.categories = categories
  }
}

export const getters = {
  recipes: (state) => {
    return state.recipes
  },
  recipeByPath: state => (path) => {
    return state.recipes.find(r => r.path === path)
  },
  categories: (state) => {
    return state.categories
  }
}
