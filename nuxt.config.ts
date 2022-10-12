import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#d47d39' },
      ]
    }
  },
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
