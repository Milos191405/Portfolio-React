/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '240px',
        'sm': '350px',
        "md":"640px",
        'lg':'1024px'
    }},
  },
  plugins: [],
};
