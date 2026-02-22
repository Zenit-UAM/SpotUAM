/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F08200",
        secondary: "#1A1A1A",
        backgroundlight: "#FFFFFF",
        backgroundlightgray: "#F5F5F5",
        colorEstate: "#2E7D32",
      },
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
