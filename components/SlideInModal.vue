<script setup lang="ts">
import { ModalSize } from "@/types/general";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const props = defineProps<{
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  size?: ModalSize;
}>();

const sliderSize = computed(() => {
  if (!props.size || props.size == ModalSize.SM) return "max-w-md w-md";
  if (props.size == ModalSize.MD) return "max-w-3xl w-3xl";
  else return "w-[90vw] sm:w-[80vw] max-w-[80rem]";
});
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden bg-black/50">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto w-screen"
                :class="sliderSize"
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-surface py-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="section-title text-base sm:text-lg text-center leading-6 ml-6 w-full flex justify-center xl:justify-start"
                        >{{ title }}</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-background text-on-surface hover:text-on-surface-secondary focus:outline-none focus:ring-2 focus:text-secondary"
                          @click="$emit('close')"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p v-if="subtitle" class="text-sm">{{ subtitle }}</p>
                      <div
                        class="xl:ml-6 w-full flex justify-center xl:justify-start"
                      >
                        <slot name="subtitle"></slot>
                      </div>
                      <!-- <component v-else :is="subtitleComponent"></component> -->
                    </div>
                  </div>
                  <div class="relative 2xl:mt-2 flex-1 px-4 sm:px-6">
                    <slot name="content"></slot>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
