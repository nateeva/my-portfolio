/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        dark: '#181818',
        light: '#EDF1F2',
        accent: '#D7FF81',
      },
    },
  },
  plugins: [],
}

