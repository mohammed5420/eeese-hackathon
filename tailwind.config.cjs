/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryC: "#4D4DFF",
        PrimaryBlackC: "#2B2BC0",
        SecondaryC: "#1AEABE",
        SecondaryBlackC: "#0FB793",
      },
      spacing: {
        FormWidth: "526px"
      }
    },
  },
  plugins: [require("daisyui")],
};
