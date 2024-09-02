/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    
    colors: {
      green: '#2F5349',
      orange: '#E8B236',
      white: '#FFFFFF',
      greenlight: '#67916B'
    },

    fontFamily: {
      text: ['Gothic A1', 'sans-serif'],
      title: ['Big Shoulders Text', 'sans-serif']
    }
  },
  plugins: [],
}

