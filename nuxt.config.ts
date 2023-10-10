// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@vueuse/nuxt", "@formkit/nuxt"],
  googleFonts: {
    families: {
      Inter: [200, 300, 400, 500, 600, 700, 800],
      "Big+Shoulders+Text": [600, 700, 800],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["gsap"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  formkit: {
    autoImport: true,
    // defaultConfig: false,
  },
});
