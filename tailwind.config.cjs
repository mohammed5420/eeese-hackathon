/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#4D4DFF",
        PrimaryBlack:"#2B2BC0",
        Secondary: "#1AEABE",
        SecondaryBlack:"#0FB793",
      },
    },
  },
  plugins: [require("daisyui")],
};
