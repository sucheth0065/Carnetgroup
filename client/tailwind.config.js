/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        lightPeach: "#FFE5B4",
        darkBrown: "#5D4037",
        Coral: "#FF7F50",
      },
    },
  },
  plugins: [],
};
