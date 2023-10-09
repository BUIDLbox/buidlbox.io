/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heading: ["Big Shoulders Text", "cursive"],
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
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      }
    },
  },
  plugins: [function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },],
}

