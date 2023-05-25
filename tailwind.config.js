/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-click': '#6ebe3b',
        'secondary-click': '#363a3d'
      }
    },
  },
  plugins: [],
}
