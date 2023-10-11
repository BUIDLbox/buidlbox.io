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
  <div class="bg-dark-blue mb-16 w-screen">
    <slot />
  </div>
</template>
