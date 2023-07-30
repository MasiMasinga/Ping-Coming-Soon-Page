/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7DF3",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      }
    },
  },
  plugins: [],
};
