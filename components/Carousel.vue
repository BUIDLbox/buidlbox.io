<template>
  <div
    v-if="!isLoading"
    class="w-[100vw] max-w-[100vw] flex flex-col items-center justify-center relative"
  >
    <div class="carousel w-full overflow-x-hidden pt-10 relative">
      <div
        class="inner transition-all duration-500 whitespace-nowrap"
        ref="inner"
        :style="innerStyles"
      >
        <div
          class="card h-full inline-flex z-10 transition-all duration-500"
          :style="{ width: `${cardVw}vw`, marginRight: `${gapVw}vw` }"
          v-for="card in cards"
          :key="card.uniqueId"
          :class="{
            'opacity-70 blur-[1px]':
              card.id !==
                unMutatedCardsRef[currentStep % unMutatedCardsRef.length]?.id &&
              !fullWidth,
            'pointer-events-none': transitioning,
          }"
        >
          <div
            class="w-full max-w-[65rem] m-auto bg-gradient-to-r from-primary to-tertiary h-full transition-all duration-500 shadow-lg rounded-2xl"
          >
            <div
              class="w-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded-2xl flex items-center justify-center"
            >
              <div class="w-full h-full p-[1px] rounded-2xl">
                <div
                  class="bg-background py-6 px-10 flex flex-col justify-between gap-10 rounded-2xl"
                >
                  <GradientTitle
                    class="w-fit m-auto font-heading text-4xl xl:text-4xl uppercase font-extrabold text-center"
                    >What buidlers are saying</GradientTitle
                  >
                  <p class="break-words whitespace-pre-line text-center">
                    {{ card.content }}
                  </p>
                  <div class="flex items-center gap-8">
                    <div class="w-[60px] h-[60px] rounded-full bg-gray-200" />
                    <div>
                      <h5 class="text-sm mb-1">{{ card.name }}</h5>
                      <p class="text-sm text-secondary">{{ card.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- {{ card.name }} -->
          <!-- <NavTo
            :to="
              card.id !==
              unMutatedCardsRef[currentStep % unMutatedCardsRef.length]?.id
                ? { name: HomeRouteNames.Homepage, params: {} }
                : {
                    name: HackathonDashboardRouteNames.HackathonLandingPage,
                    params: {
                      guidl: hackathon.hostOrgSlug,
                      slug: hackathon.hackathonSlug,
                    },
                  }
            "
            class="w-full"
          > -->
          <!-- <TestimonialCard :card="card" class="w-full" /> -->
          <!-- </NavTo> -->
        </div>
      </div>
      <!-- overlay next/prev buttons -->
      <div v-if="!fullWidth && cards.length !== 1">
        <div
          class="pt-8 h-full items-center flex px-[3vw] 4xl:px-[1.5vw] w-fit absolute top-0 bottom-0 left-0"
        >
          <button
            :disabled="transitioning"
            @click="
              {
                stopAutoSlide();
                prev();
              }
            "
            class="text-on-surface"
          >
            <ChevronLeftIcon
              class="h-28 w-28 2xl:h-32 2xl:w-32 p-4 text-on-surface scale-100 hover:scale-110 transition-all duration-500"
              aria-hidden="true"
            />
          </button>
        </div>
        <div
          class="pt-8 h-full items-center flex px-[3vw] 4xl:px-[1.5vw] w-fit absolute top-0 bottom-0 right-0"
        >
          <button
            :disabled="transitioning"
            @click="
              {
                stopAutoSlide();
                next();
              }
            "
            class="text-on-surface"
          >
            <ChevronRightIcon
              class="h-28 w-28 2xl:h-32 2xl:w-32 p-4 text-on-surface scale-100 hover:scale-110 transition-all duration-500"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="cards.length == 1 || fullWidth"
      class="flex gap-10 justify-between m-auto mt-1 z-50 sm:px-0 px-4 max-w-[65rem]"
      :style="{ width: `${cardVw}vw` }"
    >
      <button
        :disabled="transitioning"
        @click="
          {
            stopAutoSlide();
            prev();
          }
        "
        class="text-on-surface"
      >
        <ChevronLeftIcon
          class="h-8 w-8 text-on-surface hover:text-positive transition-all"
          aria-hidden="true"
        />
      </button>
      <button
        :disabled="transitioning"
        @click="
          {
            stopAutoSlide();
            next();
          }
        "
        class="text-on-surface"
      >
        <ChevronRightIcon
          class="h-8 w-8 text-on-surface hover:text-positive transition-all"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavTo from "@/components/generic/NavTo.vue";
import TestimonialCard from "./TestimonialCard.vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import { Testimonial } from "~/types/hackathon";

const props = defineProps<{
  testimonialCards: Testimonial[];
  unMutatedCards: Testimonial[];
}>();

const unMutatedCardsRef = ref(props.unMutatedCards);
const carouselCards = ref(props.testimonialCards);

const DESKTOP_CARD_VW = 50;
const DESKTOP_GAP_VW = 4;
const FULL_W_BREAKPOINT = 1280;

export interface UniqueTestimonial extends Testimonial {
  uniqueId?: string;
}

const { width } = useWindowSize();
const cards = ref<UniqueTestimonial[]>([]);
const innerStyles = ref({});
const transitioning = ref(false);
const inner = ref();
const cardVw = ref(DESKTOP_CARD_VW);
const gapVw = ref(DESKTOP_GAP_VW);
const fullWidth = ref(false);
const intervalId = ref();
const currentStep = ref(props.unMutatedCards?.length > 2 ? 2 : 1);
const isLoading = ref(true);
const startAutoSlide = () => {
  intervalId.value = setInterval(() => {
    next();
  }, 4000);
};

const half = computed(
  () => (100 - cardVw.value) / 2 - cardVw.value - gapVw.value
);
const step = computed(() => `${gapVw.value + cardVw.value}vw`);

onMounted(() => {
  console.log(props.testimonialCards);
  // carousel starts at the 3rd item
  const cardsLength = props.unMutatedCards.length || 0;
  const sliceIndex = cardsLength <= 1 ? 0 : cardsLength > 2 ? 2 : 1;
  const last2hacks =
    props.unMutatedCards.slice(props.unMutatedCards.length - sliceIndex) || [];
  carouselCards.value =
    [
      ...last2hacks,
      ...props.unMutatedCards.slice(
        0,
        props.unMutatedCards.length - sliceIndex
      ),
    ] || [];
  unMutatedCardsRef.value = [...carouselCards.value];
  cards.value =
    carouselCards.value?.length <= 4
      ? [...carouselCards.value, ...carouselCards.value]
      : carouselCards.value;

  const x = [...cards.value];
  cards.value = x.map((hack, index) => {
    return { ...hack, uniqueId: `carousel-item-${index}` };
  });

  if (
    window.innerWidth < FULL_W_BREAKPOINT ||
    props.testimonialCards?.length <= 2
  ) {
    cardVw.value = 100;
    gapVw.value = 0;
    fullWidth.value = true;
  } else {
    cardVw.value = DESKTOP_CARD_VW;
    gapVw.value = DESKTOP_GAP_VW;
    fullWidth.value = false;
  }
  isLoading.value = false;
  resetTranslate();
  startAutoSlide();
});

watch(width, () => {
  if (width.value < FULL_W_BREAKPOINT || props.testimonialCards?.length <= 2) {
    fullWidth.value = true;
  } else {
    fullWidth.value = false;
  }
});

watch(fullWidth, () => {
  if (fullWidth.value) {
    cardVw.value = 100;
    gapVw.value = 0;
    if (inner.value) next();
  } else {
    cardVw.value = DESKTOP_CARD_VW;
    gapVw.value = 5;
    if (inner.value) next();
  }
});

function next() {
  if (transitioning.value) return;

  transitioning.value = true;

  currentStep.value++;
  if (currentStep.value >= cards.value.length) currentStep.value = 0;
  moveLeft();

  afterTransition(() => {
    const card = cards.value.shift();
    if (card) cards.value.push(card);
    resetTranslate();
    transitioning.value = false;
  });
}

function prev() {
  if (transitioning.value) return;

  transitioning.value = true;

  currentStep.value--;
  if (currentStep.value < 0) currentStep.value = cards.value.length - 1;

  moveRight();

  afterTransition(() => {
    const card = cards.value.pop();
    if (card) cards.value.unshift(card);
    resetTranslate();
    transitioning.value = false;
  });
}

function moveLeft() {
  innerStyles.value =
    props.testimonialCards?.length > 2
      ? {
          transform: `translateX(-${step.value})
                    translateX(-${step.value}) translateX(${half.value}vw)`,
        }
      : {
          transform: `translateX(-${step.value})
                    translateX(-${step.value})`,
        };
}

function moveRight() {
  innerStyles.value =
    props.testimonialCards?.length > 2
      ? {
          transform: `translateX(${step.value})
                    translateX(-${step.value}) translateX(${half.value}vw)`,
        }
      : {
          transform: `translateX(${step.value})
                    translateX(-${step.value})`,
        };
}

function afterTransition(callback: () => void) {
  const listener = () => {
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };
  inner.value.addEventListener("transitionend", listener);
}

function resetTranslate() {
  innerStyles.value =
    props.testimonialCards?.length > 2
      ? {
          transition: "none",
          transform: `translateX(-${step.value}) translateX(${half.value}vw)`,
        }
      : {
          transition: "none",
          transform: `translateX(-${step.value})`,
        };
}

const stopAutoSlide = () => {
  intervalId.value && clearInterval(intervalId.value);
};

onUnmounted(() => {
  intervalId.value && clearInterval(intervalId.value);
});
</script>
