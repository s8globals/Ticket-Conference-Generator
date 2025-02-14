/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-98": "#FAFAFA",
      },
      fontFamily: {
        'road-rage': ['Road Rage', 'cursive'], // Add the 'Road Rage' font here
      },
    },
  },
  plugins: [],
};
