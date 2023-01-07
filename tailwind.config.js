/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "#efefef",
      },
      textColor: {
        "header-heading": "#707070",
        "header-light": "#707070",
      },
      borderColor: {
        header: "#dcdcdc",
      },
    },
  },
  variants: {},
  plugins: [],
};
