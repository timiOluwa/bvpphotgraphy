/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
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

