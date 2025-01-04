<template>
  <NuxtLink v-for="content in data" :to="content._path" :key="content._path">
    {{ content.title }}<br />
  </NuxtLink>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent().find())
</script>