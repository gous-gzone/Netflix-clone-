/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          'red-dark': '#b20710',
          black: '#141414',
          'black-light': '#181818',
          gray: '#808080',
          'gray-dark': '#333333',
        },
      },
      fontFamily: {
        sans: ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
      },
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
        'auth-fade-in': 'authFadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        authFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
