/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "cursive"],
        headerFont: ["Rubik Mono One", "sans-serif"],
      },
      focusRing: {
        2: "2px",
        4: "4px",
      },
      focusRingColor: {
        "indigo-500": "#6610f2",
        "red-500": "#f56565",
      },
    },
  },
  variants: {},
  plugins: [],
};
