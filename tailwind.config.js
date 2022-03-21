module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "460px",
        xs2: "500px",
        // sm: "640px",
      },
    },

    fontFamily: {
      // sans: ["Varela Round", "sans-serif"],
      sans: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
