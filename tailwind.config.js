/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "custom-black": "#1B1B1B",
      "custom-red": "#F45156",
      "custom-light": "#f9f9f9",
      "custom-pink": "#FFEEEF",
      "custom-grey": "#D9D9D9"
    },
    extend: {
      
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        }
    },
  },
  plugins: [],
}

