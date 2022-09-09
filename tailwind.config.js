/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'babbling-creek': '#A9B7D1',
        'flickering-sea': '#536EF6',
        'thick-blue': '#5067d7',
        'aircraft-white': '#EEF2F6',
      },
    },
  },
  plugins: [],
};
