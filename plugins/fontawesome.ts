import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {  faTwitter, faDiscord, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faTwitter as any);
  library.add(faDiscord as any);
  library.add(faLinkedin as any);
  library.add(faInstagram as any);
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
