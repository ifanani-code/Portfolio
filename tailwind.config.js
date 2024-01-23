/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#6b7280',
        dark: '#111827'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

