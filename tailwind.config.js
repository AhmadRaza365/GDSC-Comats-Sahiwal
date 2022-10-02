/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        "dark-blue": "#202124",
        red: "#EA4335",
        yellow: "#F4BC18",
        green: "#479E58",
        "light-blue": "#4285F4",
      },
      dropShadow: {
        "custom-1": "0 7px 15px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
