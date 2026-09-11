/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['Patrick', 'sans-serif'],
        comic:['Comic','sans-serif'],
        alumni:['Alumni','sans-serif'],
        signika:['Signika','sans-serif']
      },
    },
  },
  plugins: [],
}
