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
              fontFamily: 'Noto Sans'
            },
            p: {
              fontFamily: 'Noto Sans'
            },
            'ul > li': {
              position: 'relative',
              fontFamily: 'Noto Sans'
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
    require('@tailwindcss/typography')
  ],
}

