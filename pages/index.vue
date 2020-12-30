<template>
  <div class="m-8">
    <ul class="flex flex-wrap">
      <li
        v-for="recipe of recipes"
        :key="recipe.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'slug', params: { slug: recipe.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <!-- <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="article.img"
          /> -->

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ recipe.title }}</h2>
            <!-- <p>by {{ article.author.name }}</p> -->
            <p class="font-bold text-gray-600 text-sm">
              {{ recipe.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, route, redirect }) {
    const recipes = await $content('recipes')
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
