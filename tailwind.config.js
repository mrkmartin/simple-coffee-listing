/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      fontWeight: {
        light: 100,
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
