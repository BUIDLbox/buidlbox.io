/** @type {import('tailwindcss').Config} */

const FormKitVariants = require("@formkit/themes/tailwindcss");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heading: ["Big Shoulders Text", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        forms: "var(--forms)",
        "around-forms": "var(--around-forms)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "secondary-surface": "var(--secondary-surface)",
        positive: "var(--positive)",
        tentative: "var(--tentative)",
        destructive: "var(--destructive)",
        "on-surface": "var(--on-surface)",
        "on-primary": "var(--on-primary)",
        "on-secondary": "var(--on-secondary)",
        "on-surface-secondary": "var(--on-surface-secondary)",
        "on-surface-tertiary": "var(--on-surface-tertiary)",
        "on-forms": "var(--on-forms)",
        "surface-gradient": ["rgb(33,54,69)", "var(--surface-gradient)"],
        "background-gradient": "linear-gradient(180deg, rgba(16,20,24,0.8016456582633054) 0%, rgba(16,20,24,1) 34%, rgba(16,20,24,1) 98%)",
        purple: "var(--purple)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        "mid-blue": "var(--mid-blue)",
        "light-cream": "var(--light-cream)",
        "mid-green": "var(--mid-green)",
        "destructive-secondary": "var(--destructive-secondary)",
        "tertiary-surface": "var(--tertiary-surface)",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.png')",
        "card-bg": "linear-gradient(131deg, #101419 49.05%, #14181E 96.1%)"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        grow: {
          '0%': { transform: 'scale(1)',
        opacity: 0 },
          '70%': {
            opacity: 1
          },
          '100%': { transform: 'scale(10)', opacity: 0 },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        grow: "grow 8s cubic-bezier(0.42, 0, 0.58, 1) infinite"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwindcss-animation-delay"),

    FormKitVariants,
  ],
};
