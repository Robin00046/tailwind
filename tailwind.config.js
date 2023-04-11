/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Nanum: ["Nanum Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
