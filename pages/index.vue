<template>
  <div />
</template>

<script setup lang="ts">
onMounted(async () => {
  const contentList = await queryContent().find()
  // Choose one content at random and redirect to it
  const content = contentList[Math.floor(Math.random() * contentList.length)]

  if (content._path) {
    const router = useRouter()
    router.replace(content._path)
  }
})
</script>