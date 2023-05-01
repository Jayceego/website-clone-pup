/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#800',
          low_dark: '#666',
          gray: '#555',
          dark_gray: '#888',
          500: '#5399C5',
          600: '#3E7EB0',
          700: '#2F5F89',
          800: '#1E3C5A',
          900: '#142635',
        },
      },
    },
  },
  plugins: [],
}
