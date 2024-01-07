/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#22223B',
        'blue-1': '#4A4E69',
        'white-1': '#F2E9E4',
      },
    },
  },
  plugins: [],
}