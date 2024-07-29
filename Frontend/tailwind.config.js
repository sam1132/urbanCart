/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}














// const flowbite = require("flowbite-react/tailwind");
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
//     ,flowbite.content(),
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin(),
// ],
// };
