/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'dorado': '#FFAD1B',
          'rojo' : '#8E0000',
        }
      },
      fontFamily: {
        text: ['Merriweather'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}
