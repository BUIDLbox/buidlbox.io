<script setup lang="ts">
import { Testimonial } from "~/types/hackathon";
import { UniqueTestimonial } from "./Carousel.vue";

const props = defineProps<{
  testimonial: UniqueTestimonial;
}>();

console.log(props.testimonial);
</script>
<template>
  <div
    v-if="testimonial"
    class="bg-gradient-to-r from-primary via-secondary to-tertiary rounded-2xl flex items-center justify-center"
  >
    <div class="w-full h-full p-[1px] rounded-2xl">
      <div
        class="bg-background py-6 px-10 flex flex-col justify-between gap-10 rounded-2xl"
      >
        <GradientTitle
          class="font-heading text-4xl xl:text-4xl uppercase font-extrabold text-center"
          >What buidlers are saying</GradientTitle
        >
        <div class="break-words whitespace-pre-line">
          <p class="break-words whitespace-pre-line">
            {{ testimonial.content }}
          </p>
        </div>
        <div class="flex items-center gap-8 flex-wrap">
          <div class="w-[60px] h-[60px] rounded-full bg-gray-200" />
          <div>
            <h5 class="text-sm mb-24">{{ testimonial.name }}</h5>
            <p class="text-sm text-secondary">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
