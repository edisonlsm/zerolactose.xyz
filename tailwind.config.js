/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: '#d47d39',
              fontWeight: '700',
              fontFamily: 'Raleway'
            },
            p: {
              fontFamily: 'Merriweather'
            },
            'ul > li': {
              position: 'relative',
              fontFamily: 'Merriweather'
            }
          }
        }
      },
      colors: {
        'zero-orange': '#d47d39',
        'zero-orange-light': '#da966b'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-safe-area')
  ],
}

