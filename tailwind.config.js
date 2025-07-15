/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'dancing': [ "Dancing Script", 'cursive'],
        'greatVibes': ["Great Vibes", 'cursive']
      },
      colors: {
        'yellow': "#F0C445",
        'gray': '#2B2F2E'
      }
    },
  },
  plugins: [],
}

