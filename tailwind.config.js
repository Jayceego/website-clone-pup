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
          dark_red: '#691819',
          low_dark: '#666',
          gray: '#555',
          dark_gray: '#888',
        },
      },
      
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      
    },
  },
  plugins: [],
}
