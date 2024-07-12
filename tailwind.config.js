/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E0F7FA', // Light blue for the gradient start
        'darker-blue': '#B2EBF2' // Slightly darker blue for the gradient end
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}