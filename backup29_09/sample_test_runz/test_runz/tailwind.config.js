/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
     colors: {
          "keywe-blue":"#0490fb",
          "border-keywe":"#8a939b",
          "testRunz-color":"#ffc832",
         "bgColorFrom": "#ffe9c4",
         "bgColorTo":  "#fff0cd",
         "logo-color1":"#512110",
         "logo-color2":"#512110"
      }, opacity: {
        '85': '.85',
      },
      fontFamily:{
        "keywe-font-family": "DejaVuSansCondensed",
        "keywe-font":"DejaVuSansBold"
      },
      top:{
        "65":"65%"
      },
      right:{
        "34":"34%"
      },
      height: {
        '46': '46rem',
        
      },
      width:{
        "70": "70%"
      },
      padding:{
        "70":"70px"
      }
    },
  },
  plugins: [],
}

