/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'purple': '#666CA3',
      'black': "#13183F",
      'grey': '#83869A',
      'pink': "#F74780",
      'light-pink': 'FFA7C3',
      'white': "#FFFFFF",
      'pink1': "#F02AA6",
      'pink2': "#FF6F48",
      'purple1': '#4851FF',
      'purple2': '#F02AA6'
    },
    fontFamily: {
      'sans': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      'h1': ['56px', '70px'],
      'h2': ['40px', '51px'],
      'h3': ['32px', '40px'],
      'h4': ['24px', '28px'],
      'body-md': ['18px', '28px'],
      'body-sm': ['16px', '28px']
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          width: '140px',
          height: '48px',
          borderRadius: '9999px',
          fontWeight: '500',
        },
        '.btn-md': {
          width: '167px',
          height: '56px'
        },
        '.btn-black': {
          backgroundColor: '#13183F',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#666CA3'
          },
        },
        '.btn-pink': {
          backgroundImage: 'linear-gradient(#F02AA6, #FF6F48)',
          color: '#fff',
          '&:hover': {
            opacity: '.8'
          },
        },
        '.btn-purple': {
          backgroundImage: 'linear-gradient(#4851FF, #F02AA6)',
          color: '#fff',
          '&:hover': {
            opacity: '.8'
          },
        },
      })
    })
  ]
}
