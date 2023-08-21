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
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
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
        400: "#D2A36C",
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
