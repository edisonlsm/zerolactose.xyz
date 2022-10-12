import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
      plugins: [
          svgLoader()
      ]
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
