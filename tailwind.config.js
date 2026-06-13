/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f4',
          100: '#fde6df',
          200: '#f8c4b9',
          300: '#f1988d',
          400: '#ea7667',
          500: '#c84f42',
          600: '#aa3b35',
          700: '#7c2d27',
          800: '#59211e',
          900: '#3f1714',
        },
        accent: '#d8b38e',
        cream: '#fbf4ec',
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
