/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { colors },
    colors: {
      'bitcoin-orange': '#f7931a',
      'orange-text': '#ff9536',
      'soft-orange': '#ffe9d5',
      'secondary-blue': '#1a9af7',
      'soft-blue': '#e7f5ff',
      'warm-black': '#282623',
      'custom-black': '#201e1c',
      'off-white': '#faf8f7',
      'just-white': '#fff',
      'custom-grey': '#bababa',
      'grey-2': '#757575',
      'grey-3': '#b5b0ac',
      'grey-4': '#808080',
      'grey-5': '#e5e5e5',
    },
  },
  plugins: [],
};
