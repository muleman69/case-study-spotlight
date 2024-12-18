/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2DD4BF',
        background: '#0A0B14',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      aspectRatio: {
        'w-16': '16',
        'h-9': '9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};