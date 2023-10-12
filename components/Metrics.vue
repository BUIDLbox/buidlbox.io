<script setup lang="ts">
import { Metrics, getMetricsAPI } from "../api";
const metrics = ref<Metrics[]>();

onMounted(async () => {
  const metricsData = await getMetricsAPI();
  metrics.value = metricsData.data?.data;
});
</script>
<template>
  <div class="grid grid-cols-2 gap-2 w-full">
    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center py-4 sm:py-4 py-2"
    >
      <GradientTitle class="font-heading font-bold text-2xl sm:text-3xl xl:text-5xl"
        >{{
          formatAmount(
            metrics?.find((m) => m.property == "buidlers")?.value || 0
          )
        }}+</GradientTitle
      >
      <h5 class="font-heading font-semibold uppercase sm:text-sm text-xs">
        Buidler profiles created
      </h5>
    </div>
    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center py-4 sm:py-4 py-2"
    >
      <GradientTitle class="font-heading font-bold text-2xl sm:text-3xl xl:text-5xl"
        >${{
          formatAmount(
            metrics?.find((m) => m.property == "prizes")?.value || 0
          )
        }}+</GradientTitle
      >
      <h5 class="font-heading font-semibold uppercase sm:text-sm text-xs">
        Prizes distributed
      </h5>
    </div>

    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center py-10 sm:px-10 px-2"
    >
      <GradientTitle class="font-heading font-bold xl:text-8xl text-5xl"
        >{{
          formatAmount(
            metrics?.find((m) => m.property == "hackathons")?.value || 0
          )
        }}+</GradientTitle
      >
      <GradientTitle class="font-heading font-bold uppercase xl:text-2xl sm:text-xl text-sm">
        hackathons
      </GradientTitle>
    </div>
    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center py-10 sm:px-10 px-2"
    >
      <GradientTitle class="font-heading font-bold xl:text-8xl text-5xl"
        >{{
          floorAmount(
            metrics?.find((m) => m.property == "projects")?.value || 0,
            true
          )
        }}+</GradientTitle
      >
      <GradientTitle class="font-heading font-bold uppercase xl:text-2xl sm:text-xl text-sm">
        Projects created
      </GradientTitle>
    </div>
  </div>
</template>
