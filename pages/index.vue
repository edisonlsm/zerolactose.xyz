<script lang="ts" setup>
// Load all items just so we can pick one at page mount
const { data } = await useAsyncData('data', async () => await queryContent('/').only(['_path', 'title']).find())

onMounted(() => {
  // Pick one item at random
  const item = data.value[Math.floor(Math.random() * data.value.length)]
  const router = useRouter();
  router.replace(item._path)
})

// const recipe = this.recipes[Math.floor(Math.random() * this.recipes.length)]
//     this.$router.replace(`${recipe.path}/`)
</script>

<template>
  <ContentIndex />
</template>