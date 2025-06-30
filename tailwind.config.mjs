/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "1024px",
        lg: "1370px",
        "3xl": "1920px",
      },
      colors: {
        "jet-black": {
          DEFAULT: "#161616",
        },
        paragraph: {
          DEFAULT: "#515151",
        },
        "purple-custom": {
          DEFAULT: "#6248FF",
        },
        background: "#FFFFFF",
        foreground: "#080808",
        dark: "#1D1D1D",
        light: "#FAF8F6",
        prim: "#FF2626",
        sec: "#080808",
        gray: {
          DEFAULT: "#D7D7D7",
          dark: "#BDBDBD",
          900: "#959595",
          800: "#808080",
          700: "#7A7A7A",
          600: "#686868",
          500: "#545454",
          bb: "#BBBBBB",
          new: "#E7E6E4",
          "btn-hover": "#F1F0EE",
        },
        blue: {
          DEFAULT: "#5B97BD",
          light: "#D3E5EF",
          dark: "#183347",
        },
        yellow: {
          DEFAULT: "#CB9433",
          light: "#FDECC8",
          dark: "#402C1B",
        },
        purple: {
          DEFAULT: "#A782C3",
          light: "#E8DEEE",
          dark: "#412454",
        },
        green: {
          DEFAULT: "#6C9B7D",
          light: "#DBEDDB",
          dark: "#1C3829",
        },
        red: {
          DEFAULT: "#E16F64",
          light: "#FFE2DD",
          dark: "#5D1715",
        },
        brown: {
          DEFAULT: "#D48245",
          light: "#FDE7D2",
          dark: "#5D4015",
        },
      },
      fontFamily: {
        urbanist: "var(--font-urbanist)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
