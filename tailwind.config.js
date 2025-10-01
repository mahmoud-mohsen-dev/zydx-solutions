import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1650px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "46rem",       // 736px
        lg: "60.25rem",    // 964px
        xl: "76.25rem",    // 1220px
        // "2xl": "88.125rem", // 1410px
        // "3xl": "105rem",    // 1680px
      },
    },
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
        "what_we_do": "0px 4px 12px 0px rgba(155,155,155,0.25)",
      },
      fontSize: {
        // 📌 Extra small text
        "fluid-xs": "clamp(0.75rem, 0.6875rem + 0.2vw, 0.875rem)", 
        // captions, footnotes | min: 12px, max: 14px

        // 📌 Small body
        "fluid-sm": "clamp(0.875rem, 0.75rem + 0.3vw, 1rem)", 
        // small text, secondary body | min: 14px, max: 16px

        // 📌 Base body
        "fluid-base": "clamp(1rem, 0.875rem + 0.4vw, 1.25rem)", 
        // body text, paragraphs | min: 16px, max: 20px

        // 📌 Medium body
        "fluid-md": "clamp(1.125rem, 1rem + 0.45vw, 1.375rem)", 
        // slightly larger body, buttons | min: 18px, max: 22px

        // 📌 Custom: max 24px
        "fluid-max24": "clamp(1.125rem, 1rem + 0.7vw, 1.5rem)", 
        // lead text, buttons, compact headings | min: 18px, max: 24px

        // 📌 Headings
        "fluid-lg": "clamp(1.25rem, 1rem + 0.6vw, 1.75rem)",    
        // subtitle / h5 | min: 20px, max: 28px

        "fluid-xl": "clamp(1.5rem, 1.25rem + 0.8vw, 2rem)",     
        // h4 | min: 24px, max: 32px

        "fluid-2xl": "clamp(2rem, 1.5rem + 1vw, 3rem)",         
        // h3 | min: 32px, max: 48px

        "fluid-3xl": "clamp(2.5rem, 2rem + 1.2vw, 3.5rem)",     
        // h2 | min: 40px, max: 56px

        "fluid-4xl": "clamp(3rem, 2rem + 2vw, 4.5rem)",         
        // h1 | min: 48px, max: 72px

        "fluid-5xl": "clamp(3.5rem, 2.5rem + 2.5vw, 5rem)",     
        // display heading / hero | min: 56px, max: 80px

        "fluid-6xl": "clamp(4rem, 3rem + 3vw, 6rem)",           
        // extra large hero | min: 64px, max: 96px

        "fluid-7xl": "clamp(5rem, 4rem + 4vw, 7rem)",           
        // landing page title | min: 80px, max: 112px
      },
      
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
