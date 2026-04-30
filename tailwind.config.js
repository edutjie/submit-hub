/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-indigo": "#3B32B5",
        "dark-indigo": "#332C7A",
        "bright-indigo": "#4A42D3",
        "medium-purple": "#6059D9",
        lavender: "#DEE3FC",
        "off-white": "#F8F9FA",
        "light-gray": "#E9EAED",
        "dark-slate": "#555B66",
        "medium-gray": "#6D727D",
        "mint-green": "#D6F7E3",
        cream: "#FAF1C7",
        "success-green": "#53AA7B",
        "dark-green": "#37614E",
        "golden-amber": "#E19A3F",
        "dark-amber": "#7C4323",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
