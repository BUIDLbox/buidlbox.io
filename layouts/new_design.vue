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

const isTrialModalOpen = ref(false);

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
  <div
    class="bg-secondary-surface w-screen max-w-screen min-h-screen relative"
  >
    <div
      class="w-screen py-4 flex items-center justify-between px-[7vw] fixed z-[90] transition-all duration-300"
      :class="{ 'bg-secondary-surface backdrop-blur-xl': showHeaderBackground }"
    >
      <img
        src="/buidlbox-logo-horizontal.png"
        alt="buidlbox logo"
        width="180"
        height="40"
        class="xl:w-[150px] w-28 h-auto"
      />

      <!-- <GradientButton
        class="flex-shrink-0 flex-grow-0"
        @click="
          () => {
            isTrialModalOpen = true;
            mixpanel.track('Request a demo', {
              type: 'Lead',
            });
          }
        "
        >Request a demo</GradientButton
      > -->
    </div>

    <slot />
  </div>

  <RequestTrial
    :dark-bg="true"
    :is-modal-open="isTrialModalOpen"
    @close-modal="isTrialModalOpen = false"
  />
</template>
<style scoped>
.background-gradient {
  background: rgb(16, 20, 24);
  background: linear-gradient(
    0deg,
    rgba(16, 20, 24, 0) 0%,
    rgba(16, 20, 24, 1) 30%,
    rgba(16, 20, 24, 1) 98%
  );
}
</style>
