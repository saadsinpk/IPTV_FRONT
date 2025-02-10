/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example color (change as needed)
        "primary-foreground": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
