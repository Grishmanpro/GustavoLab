/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        suisse: ['"Suisse Intl"', 'sans-serif'],
      },
      colors: {
        dark: '#0C0C0F',
        accent: '#FF0040',
      },
      boxShadow: {
        neon: '0 0 10px rgba(255, 0, 80, 0.7)',
      },
    },
  },
  plugins: [],
};
