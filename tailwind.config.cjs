/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : {
          100: '#1F282F',
          200: '#171A21',
        },
        'orange': "#F5A302",
        'light': "#f5f5f5",
      }
    },
  },
  plugins: [],
}
