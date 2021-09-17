module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        60: '15rem',
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
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
        'zero-orange': '#d47d39'// '#db813b'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
