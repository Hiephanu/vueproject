/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      'blue':'#1eaeff',
      'gray':'#f7f6fe',
      'white':'#ffffff',
      'red':'#ff6131'
    },
    extend: {}
  },
  plugins: [],
}
