<script lang="ts" setup>
const { data: navigation } = await useAsyncData('nav', () => fetchContentNavigation());
</script>

<template>
  <nav class="my-4">
    <ul>
      <li v-for="category in navigation" :key="category._path">
        <NuxtLink :to="category._path">
          <span class="block mx-6 font-bold text-zero-orange text-2xl">
            {{ category.title }}
          </span>
        </NuxtLink>

        <ul class="flex flex-wrap my-2 mx-6">
          <li
            v-for="item in category.children"
            :key="item._path"
            class="p-2"
          >
            <NuxtLink
              :to="item._path"
              class="text-lg flex"
              exact-active-class="text-zero-orange"
            >
              <h4>{{ item.title }}</h4>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>