/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
