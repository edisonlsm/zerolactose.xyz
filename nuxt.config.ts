import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Receitas Zero Lactose',
      meta: [
        { name: 'theme-color', content: '#da966b' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  },

  // nitro: {
  //   preset: "cloudflare-pages"
  // },

  vite: {
    plugins: [
      svgLoader(),
    ]
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts'
  ],

  content: {
    locales: ['pt-BR'],
    markdown: {
      anchorLinks: false,
    }
  },

  googleFonts: {
    families: {
      Raleway: {
        wght: [700],
      },
      Merriweather: true,
    }
  }

})