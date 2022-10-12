<template>
  <div>
    Main category page
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  // Since we don't have a category home page yet, let`s throw a 404
  throw createError({
    statusCode: 404,
    fatal: true,
  })
})
</script>