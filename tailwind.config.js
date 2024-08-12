const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "Sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: "#F58534",
      },
    },
  },
  plugins: [],
};
