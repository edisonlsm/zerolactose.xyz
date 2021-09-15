<template>
  <div />
</template>

<script>
export default {
  async asyncData ({ $content, route, redirect }) {
    const recipes = await $content()
      .only(['slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const recipe = recipes[Math.floor(Math.random() * recipes.length)]

    // console.log(route)
    // console.log(recipe)

    redirect(`/${recipe.slug}`)
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
