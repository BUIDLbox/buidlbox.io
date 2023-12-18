<script setup lang="ts">
import { computed } from "vue";
import { ButtonSize, ButtonType } from "../types/button";
import loadingDots from "@/assets/lottie/loading-colored-dots.json";
const props = withDefaults(
  defineProps<{
    buttonType?: ButtonType;
    title?: string;
    size?: ButtonSize;
    transform?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    newTab?: boolean;
  }>(),
  {
    buttonType: ButtonType.Primary1,
    size: ButtonSize.Medium,
    transform: false,
  }
);
</script>

<template>
  <div class="relative">
    <div class="p-[1px] gradient rounded-lg relative z-50 w-full md:w-fit group ">
      <div
        class="p-[1px] gradient blur-xl opacity-25 group-hover:scale-[1.15] transition-all duration-300 scale-100 absolute z-0 w-full h-full"
      ></div>
      <button
        type="button"
        :disabled="disabled || isLoading"
        :class="{ 'cursor-not-allowed': disabled }"
        class="inter font-bold flex items-center justify-center w-full md:w-fit rounded-lg relative overflow-hidden bg-secondary-surface"
      >
        <!-- Content of the button -->
        <div v-if="isLoading">
          <client-only>
            <Vue3Lottie
              :animationData="loadingDots"
              class="transition-all duration-300"
              :height="20"
              :width="50"
            />
          </client-only>
        </div>
        <div class="px-8 py-4 section-eyebrow font-semibold">
          <slot></slot>
        </div>
      </button>
    </div>
  </div>
</template>
