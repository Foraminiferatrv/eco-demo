/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontFamily: {
      'Kollektif': [ '"Kollektif"', 'sans-serif' ]
    },
    extend: {
      backgroundImage: {
        'leaves-1': "url('/src/assets/img/leaves-1.jpg')",
        'leaves-2': "url('/src/assets/img/leaves-2.jpg')",
        'leaves-3': "url('/src/assets/img/leaves-3.jpg')",
      }
    }
  }
}