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
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-4"
    >
      <GradientTitle class="font-heading font-bold text-5xl"
        >{{
          formatAmount(
            metrics?.find((m) => m.property == "buidlers")?.value || 0
          )
        }}+</GradientTitle
      >
      <h5 class="font-heading font-semibold uppercase text-sm">
        Buidler profiles created
      </h5>
    </div>
    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-4"
    >
      <GradientTitle class="font-heading font-bold text-5xl"
        >${{
          formatAmount(
            metrics?.find((m) => m.property == "prizes")?.value || 0
          )
        }}+</GradientTitle
      >
      <h5 class="font-heading font-semibold uppercase text-sm">
        Prizes distributed
      </h5>
    </div>

    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-10"
    >
      <GradientTitle class="font-heading font-bold text-8xl"
        >{{
          formatAmount(
            metrics?.find((m) => m.property == "hackathons")?.value || 0
          )
        }}+</GradientTitle
      >
      <GradientTitle class="font-heading font-bold uppercase text-2xl">
        hackathons
      </GradientTitle>
    </div>
    <div
      class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-10"
    >
      <GradientTitle class="font-heading font-bold text-8xl"
        >{{
          floorAmount(
            metrics?.find((m) => m.property == "projects")?.value || 0,
            true
          )
        }}+</GradientTitle
      >
      <GradientTitle class="font-heading font-bold uppercase text-2xl">
        Projects created
      </GradientTitle>
    </div>
  </div>
</template>
