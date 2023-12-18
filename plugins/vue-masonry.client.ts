import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMasonryPlugin, { name: "VueMasonryPlugin" });
});