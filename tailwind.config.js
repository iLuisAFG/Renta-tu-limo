/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          deep: "#08090C",
          pure: "#050608",
          surface: "#0D0E12",
          card: "#111217",
          elevated: "#161820",
          input: "#181A22",
        },
        champagne: {
          DEFAULT: "#DDB789",
          light: "#F3E2CF",
          hover: "#E8C8A3",
          dark: "#C09564",
          muted: "#8F7326",
        },
        platinum: {
          DEFAULT: "#CBD5E1",
          light: "#F5F5F7",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'gold-pill': '0 4px 20px -2px rgba(221, 183, 137, 0.25)',
        'gold-glow': '0 0 35px rgba(221, 183, 137, 0.22)',
        'obsidian-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
