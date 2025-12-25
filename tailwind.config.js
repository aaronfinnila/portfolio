/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#b9dccb',
          300: '#8dc4a8',
          400: '#5fa582',
          500: '#3f8a64',
          600: '#2d6e4e',
          700: '#25593f',
          800: '#1f4734',
          900: '#1a3a2c',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
