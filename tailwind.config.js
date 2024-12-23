/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      text: "#050606",
      background: "#F8FAFC",
      primary: "#4a90e2",
      secondary: "#2b6cb0",
      accent: "#7fb8f2",
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
    extend: {
      colors: {
        dark: {
          text: "#f9fafa",
          background: "#2a2c2d",
          primary: "4a90e2",
          secondary: "#4e8fd4",
          accent: "#0d4782",
        },
      },
      boxShadow: {
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
