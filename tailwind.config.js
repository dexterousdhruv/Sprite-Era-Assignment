/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'light-grey': '#A6A6A6',
        "mild-green": '#54BD95',
        'charcoal': '#191A15',
        "chalk": '#F9F8FE',
        "lead": "#161C28",
        "mild-lead": "#222938",
      },
      boxShadow: {
        "xs": '0px 4px 9px 0px #0000000D'
      },
      screens: {
        'xs': '576px',
        'xxs': '425px',
        '1xl': '1400px'
      },
      backgroundImage: {
        'conic-top-right': 'conic-gradient(from 45deg at top right, #daefeb, white 50%)',
      }
    },
  },
  plugins: [],
}

