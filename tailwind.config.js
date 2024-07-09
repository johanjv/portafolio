/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#291c3a',
        'semibackground': '#331c52',
        'navbar': '#8121d0',
        'backgroundcad': '#dccfed',
        'semibackgroundcad': '#e1ebed',
        'other': '#ffffff',
      },
    },
  },
  plugins: [],
}