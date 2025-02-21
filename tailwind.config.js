/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Scan all HTML files inside public
    "./public/assets/js/**/*.js" // Scan all JS files in public/assets/js
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px'
      },
      spacing:{
        "big": "30rem"
      } 
    },
    
    fontFamily:{
      poppins:['poppins', 'sans-serif']
    }
   
  },
  plugins: [],
}

