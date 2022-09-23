/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "481px",
        lg: "869",
        xl: "1120px",
        "2xl": "1500px",
      },
      colors: {
        primary: "#062775",
      },
    },
  },
  plugins: [],
};
