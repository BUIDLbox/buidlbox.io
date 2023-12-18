<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type Ref,
} from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ModalSize } from "@/types/general";

const open = ref(true);
const emit = defineEmits(["close"]);
const modal: Ref<HTMLElement | null> = ref(null);

const props = withDefaults(
  defineProps<{
    title?: string;
    disableClose?: boolean;
    subtitle?: string;
    size: ModalSize;
    initialFocus?: HTMLElement;
  }>(),
  {
    size: ModalSize.SM,
  }
);

const closeModal = () => {
  if (props.disableClose) return;
  open.value = false;
  setTimeout(() => emit("close"), 300);
};

const size = computed(() => {
  return {
    "sm:max-w-lg": props.size == ModalSize.SM,
    "sm:max-w-5xl": props.size == ModalSize.LG,
  };
});

// onMounted(() => {
//   document.getElementById("app")?.classList.add("blur-sm");
// });
// onBeforeUnmount(() => {
//   document.getElementById("app")?.classList.remove("blur-sm");
// });
</script>

<template>
  <ClientOnly>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden bg-black/50 blur-sm">
        <TransitionRoot as="template" :show="open">
          <Dialog
            as="div"
            class="relative z-[100]"
            @close="closeModal()"
            :initial-focus="initialFocus"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed inset-0 bg-black bg-opacity-25 transition-opacity blur-md"
              />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
              >
                <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel
                    class="relative transform rounded-lg bg-surface text-left shadow-xl transition-all sm:my-8 w-full"
                    :class="size"
                  >
                    <h4 class="text-center mb-6" v-if="title">{{ title }}</h4>
                    <slot></slot>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>
  </ClientOnly>
</template>
