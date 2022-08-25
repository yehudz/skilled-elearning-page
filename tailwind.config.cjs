/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
