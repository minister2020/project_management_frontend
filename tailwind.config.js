/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#292626",
      blue: "#ECF2FF",
      lightblue: "#5790FF",
      darkblue: "#053083",
      deepblue: "#03122F",
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      lg: { max: "1024px" },
      md: { min:"415px", max:"1023px" },
      sm: { max: "414px" } 
    }
  },
  plugins: [],
}