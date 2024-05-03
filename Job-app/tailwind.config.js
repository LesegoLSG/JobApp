/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      colors: {
        primary: '#27374D',
        secondary: '#526D82',
        accent: '#9DB2BF',
      },
      boxShadow: {
        custom: '0 6px 8px rgba(65, 201, 226, 0.1), 0 1px 3px rgba(65, 201, 226, 1)'
      }
    },
  },
  plugins: [],
}

