/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        nav:"#FED036",
        black:"#3E3E3E"
      },
      fontFamily:{
       Proxima: 'Proxima Nova Condensed'
      },
      
    },
    screens: {
      'xs': {'max': '320px'},
      'ss': {'max': '375px'},
      'sm': {'max': '768px'},
      'md': {'max': '1024px'},
      'lg': {'max': '1440px'},
      'xl': {'max': '1700px'},
    },
  },
  plugins: [],
}

