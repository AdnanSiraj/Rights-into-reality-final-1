/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F3F6FA',
          100: '#E1E8F0',
          200: '#C3D0E0',
          300: '#8FA4BE',
          400: '#5D7699',
          500: '#3B5680',
          600: '#25406B',
          700: '#1C3352',
          800: '#14243A',
          900: '#0E1B2E',
          950: '#0B1524',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(14,27,46,0.06), 0 4px 12px -2px rgba(14,27,46,0.08)',
      },
    },
  },
  plugins: [],
}
