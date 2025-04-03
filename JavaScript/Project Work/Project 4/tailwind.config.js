/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','table.html','index1.html'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};