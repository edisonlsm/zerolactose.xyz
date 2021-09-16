<template>
  <div />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  mounted () {
    // Choose one recipe at random and redirect to it
    const recipe = this.recipes[Math.floor(Math.random() * this.recipes.length)]
    this.$router.replace(`${recipe.path}/`)
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
  .article-card {
    border-radius: 8px;
  }
  .article-card a {
    background-color: #fff;
    border-radius: 8px;
  }
  .article-card img div {
    border-radius: 8px 0 0 8px;
  }
</style>
