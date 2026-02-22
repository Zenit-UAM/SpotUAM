/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./frontend/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F08200",
        secondary: "#1A1A1A",
        backgroundlight: "#FFFFFF",
        backgroundlightgray: "#F8F9FA",
        colorEstate: "#2E7D32",
      },
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
