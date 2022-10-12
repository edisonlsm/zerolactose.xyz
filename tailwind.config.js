/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: '#d47d39',
              fontWeight: '700',
              pointerEvents: 'none',
              textDecoration: 'none',
            },
            p: {
            },
            'ul > li': {
              position: 'relative',
            },
            a: {
              fontSize: '0.75em',
              fontWeight: '400',
              textDecoration: 'none',
            }
          }
        }
      },
      colors: {
        'zero-orange': '#d47d39'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
