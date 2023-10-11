<script setup lang="ts">
defineProps<{
  progress: number;
}>();
</script>

<template>
  <div class="w-full h-px overflow-hidden rounded-md absolute bottom-0 left-0">
    <div
      class="bg-on-surface-secondary w-full h-1 transition-all duration-[0.05s]"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>
