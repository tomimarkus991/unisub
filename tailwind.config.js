/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        minscreen: "340px",
        xs: "460px",
        xs2: "500px",
        // sm	640px
        sm2: "700px",
        // md	768px
        md2: "915px",
        // lg	1024px
        lg2: "1200px",
        // xl	1280px
        // 2xl 1536px
        "3xl": "1700px",
      },
      gridRow: {
        "span-12": "span 12 / span 12",
        "span-15": "span 15 / span 15",
      },
    },
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      sans: ["Rubik", "sans-serif"],
    },
    linearBorderGradients: () => ({
      colors: {
        "light-green": [colors.emerald[500], colors.green[500], colors.lime[500]],
        "light-blue": [colors.teal[500], colors.emerald[500], colors.green[500]],
        purple: [colors.blue[500], colors.pink[500], colors.purple[500]],
        gray: [colors.gray[300], colors.slate[100], colors.gray[300]],
      },
      background: {
        white: "#fff",
      },
    }),
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
