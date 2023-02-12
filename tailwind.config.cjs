/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple: "rgb(221,49,210)",
        blue: 'rgb(60, 103, 227)',
        cyan: "rgb(15,251,255)",
      },
    },
  },
  plugins: [],
}
