<script setup lang="ts">
import { Mixpanel } from "mixpanel-browser";
const route = useRoute();
const mixpanel = inject("mixpanel") as Mixpanel;

watch(
  () => route.path,
  () => {
    if (mixpanel) {
      mixpanel.track_pageview({
        page: route.path,
        type: "buidlbox.io",
      });
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="bg-dark-blue pb-16 w-screen max-w-screen sm:overflow-visible overflow-hidden min-h-screen">
    <Header />

    <slot />
    <PageFooter />

  </div>
</template>
