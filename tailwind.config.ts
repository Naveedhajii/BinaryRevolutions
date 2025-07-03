/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        dark: '#111722',
        'dark-text': '#79808a',
        'gray-2': '#F7F7F7',
        'dark-bg': '#2C3443',
        stroke: '#e5e7eb',
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'noise-pattern': "url('/images/NoisePattern.svg')",
      },
      screens: {
        xs: '500px',
        sm: '540px',
        md: '768px',
        lg: '992px',
        xl: '1140px',
        '2xl': '1320px',
      },
      boxShadow: {
        light: '0px 1px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};