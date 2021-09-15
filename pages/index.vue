<template>
  <div />
</template>

<script>
export default {
  async mounted () {
    const recipes = await this.$content('receitas')
      .only(['path'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const recipe = recipes[Math.floor(Math.random() * recipes.length)]

    this.$router.replace(`${recipe.path}/`)
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
