/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // https://www.learnui.design/tools/gradient-generator.html
        // #dd31d2 -> #0FFBFF
        // background: linear-gradient(90deg, #dd31d2, #00bcff, #0ffbff);
        // background: linear-gradient(90deg, #dd31d2, #519cff, #00d5ff, #0ffbff);

        purple: "rgb(221,49,210)", // #DD31D2
        blue: 'rgb(0, 188, 255)', // #00bcff
        cyan: "rgb(15,251,255)", // #0FFBFF
      },
    },
  },
  plugins: [],
}
