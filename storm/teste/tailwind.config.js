/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-dark': '#5E6D8C',
        'sky-medium': '#8D95A6',
        'sky-deep': '#023E73',
        'sky-darker': '#023059',
        'sky-light': '#D2D6D9',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};