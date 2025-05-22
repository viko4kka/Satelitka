/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainColorText: "#18003D",
        mainBackgroundColor: "#4000B0",
        mainDarkBackgroundColor: "#210351",
        
      },
    },
  },
  plugins: [],
};
