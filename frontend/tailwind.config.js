import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D2323",
        secondary: "#A31D1D",
        accent: "#E5D0AC",
        background: "#FEF9E1",
      },
    },
  },
  plugins: [],
};
