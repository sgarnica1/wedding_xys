/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#414141",
        secondary: "#727272",
        accent: "#5C724A",
        "bg-primary": "#F6F5EF",
        "bg-secondary": "#F0F0F0",
        "button": "#DCD7B7",
      },
      fontFamily: {
        primary: ['AbrahamLincoln', 'sans-serif'],
        secondary: ['Didot', 'sans-serif'],
        abhaya: ['Abhaya', 'sans-serif']
      }
    }
  },
  prefix: "",
  plugins: [],
}