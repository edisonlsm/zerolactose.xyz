<template>
  <footer class="flex-none bg-zero-orange-light bg-opacity-60 text-white font-bold py-2 px-safe-offset-2 flex justify-between items-center">
    <span class="text-sm">© Edison Santiago</span>
    <div class="flex space-x-3 items-center">
      <a v-for="network in socialNetworks" :href="network.url" :key="network.name"
        target="_blank" rel="noopener noreferrer" 
        class="h-6 flex items-center">
          <component class="w-6 h-6 text-white hover:text-black fill-current" 
          :is="getSocialNetworkIcon(network.iconName)" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialNetworks = ref([
    {
      "name": "GitHub",
      "iconName": "github",
      "url": "https://github.com/edisonlsm/zerolactose.xyz"
    },
    {
      "name": "Bluesky",
      "iconName": "bluesky",
      "url": "https://bsky.app/profile/edison.santiago.dev"
    },
    {
      "name": "X",
      "iconName": "x",
      "url": "https://x.com/edisonlsm"
    },
  ])

const getSocialNetworkIcon = (name: string) => defineAsyncComponent(() => import(`../assets/icons/${name}.svg?component`))

</script>
