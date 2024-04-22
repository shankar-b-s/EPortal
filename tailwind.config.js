/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'MyFont': ['"My Font"', 'Montserrat'] 
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower':'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}