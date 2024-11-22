/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      text: "#050606",
      background: "#f6f8f9",
      primary: "#699aab",
      secondary: "#a3c7d1",
      accent: "#71aec1",
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Noto Serif NP Hmong",
      body: "Noto Serif NP Hmong",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
