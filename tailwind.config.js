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
              color: '#db700f',
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
        'zero-orange': '#db700f'
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
