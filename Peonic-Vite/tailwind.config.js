/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          '0%':{
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%':{
            transform: 'translateX(0)',
            opacity: '1'
          }
        }
      },
      animation:{
        'fade-in-left': 'fade-in-left 1.6s ease-in-out forwards',
      }
    },
    
    colors: {
      green: '#2F5349',
      orange: '#E8B236',
      white: '#FFFFFF',
      greenlight: '#67916B',
      gray: '#777777',
      black: '#1F1F1F'
    },

    fontFamily: {
      text: ['Gothic A1', 'sans-serif'],
      title: ['Big Shoulders Text', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

