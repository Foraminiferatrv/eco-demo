/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontFamily: {
      'Nunito': [ '"Nunito"', 'sans-serif' ]
    },
    extend: {
      backgroundImage: {
        'leaves-1': "url('/src/assets/img/leaves-1.jpg')",
        'leaves-2': "url('/src/assets/img/leaves-2.jpg')",
        'leaves-3': "url('/src/assets/img/leaves-3.jpg')",
        'bg-1': "url('/src/assets/img/bg-1.png')",
      }
    }
  }
}