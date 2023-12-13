<script setup lang="ts">
const props = defineProps<{
  type: "primary" | "secondary" | "tertiary";
}>();

const eyebrowClass = computed(() => {
  const val = `text-${props.type}`;
  return {[val]: true}
  });
</script>

<template>
  <div class="rounded-[32px] border border-surface py-4 sm:py-8 px-6 sm:px-10 md:px-14">
    <p class="section-eyebrow mb-2.5" :class="eyebrowClass">
      <slot name="eyebrow" />
    </p>
    <p class="font-extrabold text-sm sm:text-xl md:text-2xl"><slot name="title" /></p>
  </div>
</template>
