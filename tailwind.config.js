/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      translate: {
        'toggle': 'calc(100% - 8px)'
      }
    },
    colors: {
      gold: "#D9B081",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      translucent_dark: "rgb(0 0 0 / 0.10)",
      translucent_light: "rgb(255 255 255 / 0.10)",
      gray: {
        100: "#F7F7F7",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#4A4A4A",
        700: "#3A3A3A",
        800: "#2C2C2C",
        900: "#1D1D1D",
      },
      brown: {
        100: "#F4F3ED",
        200: "#DADADA",
        300: "#D9B081",
        400: "#F5C3A0",
        500: "#F0AA78",
        600: "#C98E4A",
        700: "#8B6548",
        800: "#69503A",
        900: "#181203",
      },
      green: {
        100: "#F0F9F0",
        200: "#D9EED9",
        300: "#C2E3C2",
        400: "#94CE94",
        500: "#66B966",
        600: "#426B69",
        700: "#3E5F5D",
        800: "#2F532F",
        900: "#1F371F",
      },
      blue: {
        500: "#011627",
      }
    },
  },
  plugins: [],
}
