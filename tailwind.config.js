/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7DF3",
      },
      height: {
        40: "40vh",
      },
    },
  },
  plugins: [],
};
