/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Indigo-600
        secondary: '#14b8a6', // Teal-400
        background: '#f9fafb', // Gray-50
      }
    },
  },
  plugins: [],
}
