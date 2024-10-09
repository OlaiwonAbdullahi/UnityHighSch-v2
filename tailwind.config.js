/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffebeb",
        secondary: "#f74040",
        text: "#0f0c0c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        titalium: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
