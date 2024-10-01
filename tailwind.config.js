/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      colors: {
        "bg-primary": "#0a192f", // bg-primary
        "bg-secondary": "#111f4d", // bg-secondary
        "text-primary": "#6b7280", // text-primary
        "text-secondary": "#4795f4", // text-secondary
        "header": "#ffffff", // text-header
      },
    },
  },
  plugins: [],
};
