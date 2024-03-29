/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark' : {
          100: '#1F282F',
          200: '#171A21',
        },
        'orange': "#F5A302",
        'light': "#f0f0f0",
      },
      animation: {
        'like': 'pulse 200ms ease-in 1',
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      },
      boxShadow: {
        'dark-100': '0 3px 15 #1F282F88',
        'dark-200': '0 3px 15 #171A2188',
      },
      animation: {
        'loading': 'loadCircle 1s ease-in infinite',
        'sticky': 'stickyNav .5s ease-out forwards',
      },
      keyframes: {
        loadCircle: {
          'from': {boxShadow: '-72px 0 #f5a302 inset'},
          'to': {boxShadow: '45px 0 #f5a302 inset'},
        },
        stickyNav: {
          'from': {transform: 'translateY(-100px)'},
          'to': {transform: 'translateY(0)'},
        }
      }
    },
  },
  plugins: [],
}
