/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6FBFE',
          100: '#E7F2F7',
          200: '#C7DFEC',
          300: '#A3C5D4',
          400: '#79AFC2',
          500: '#4B8CA6',
          600: '#357286',
          700: '#244F63',
          800: '#173D4D',
          900: '#112B35',
        },
        accent: '#C9A26C',
        cream: '#F6F2EA',
        surface: '#F7F5F0',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
