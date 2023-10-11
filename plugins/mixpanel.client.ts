import mixpanel from "mixpanel-browser";

const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

mixpanel.init(TOKEN, {
  // debug: true,
  persistence: "localStorage",
  api_host: "https://mpt.buidlbox.io",
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$mixpanel = mixpanel;
  nuxtApp.vueApp.provide("mixpanel", mixpanel);
});
