import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"], // Roboto as default
        roboto: ["var(--font-roboto)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
        lateef: ["var(--font-lateef)", "serif"], // Arabic calligraphic font
      },
      colors: {
        // Violet shades
        violet: {
          light: "#f9edff",
          "light-hover": "#e5dde9",
          "light-active": "#d0c2f0",
          DEFAULT: "#663acd",
          hover: "#4a1764",
          active: "#421559",
          dark: "#3e1453",
          "dark-hover": "#311043",
          "dark-active": "#250c32",
          darker: "#1d0927",
        },
        // Grey shades
        grey: {
          light: "#fafafa",
          "light-hover": "#f7f7f7",
          "light-active": "#efefef",
          DEFAULT: "#cccccc",
          hover: "#b8b8b8",
          active: "#a3a3a3",
          dark: "#999999",
          "dark-hover": "#7a7a7a",
          "dark-active": "#5c5c5c",
          darker: "#474747",
        },
        // Background / Foreground tokens
        // background: {
        //   light: "#fafafa",
        //   dark: "#1d0927",
        // },
        // foreground: {
        //   light: "#1d0927",
        //   dark: "#fafafa",
        // },
        
      },
      boxShadow: {
        navbar: "0px 5px 10px 6px rgba(0,0,0,0.12)",
      }
    },
  },
  darkMode: "class",

  plugins: [
    heroui({
      themes: {
        light: { 
          colors: { 
              foreground:"#1d0927", 
              background: "#fafafa", 
              primary: {
                DEFAULT: "#663acd",
                foreground: "#fafafa",
              }, 
            } },
        dark: { 
          colors: { 
            foreground:"#fafafa", 
            background: "#1d0927", 
            primary: {
              DEFAULT: "#d0c2f0",
              foreground: "#421559",
            },
          }},
      },
    }),
  ],
};

module.exports = config;
