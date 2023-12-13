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
        // TODO
        type: "buidlbox.io",
      });
    }
  },
  { immediate: true }
);

const showHeaderBackground = ref(false);
const checkPosition = () => {
  showHeaderBackground.value = window.scrollY >= 10;
};

onMounted(() => {
  window.addEventListener("scroll", checkPosition);
});
onUnmounted(() => {
  window.removeEventListener("scroll", checkPosition);
});
</script>

<template>
  <div class="bg-secondary-surface w-screen max-w-screen min-h-screen relative pb-12">
    <div
      class="w-screen py-4 flex items-center justify-between px-[7vw] fixed z-[90] transition-all duration-300"
      :class="{'bg-secondary-surface': showHeaderBackground}"
    >
      <img
        src="/buidlbox-logo-horizontal.png"
        alt="buidlbox logo"
        width="180"
        height="40"
        class="xl:w-[180px] w-28 h-auto"
      />
      <NuxtLink :href="FEATURES_URL">
        <GradientButton
          class="flex-shrink-0 flex-grow-0"
          @clicked="
            () => {
              mixpanel.track('Request a demo', {
                type: 'Lead',
              });
            }
          "
          >Request a demo</GradientButton
        >
      </NuxtLink>
    </div>

    <slot />

    <PageFooter />
  </div>
</template>
