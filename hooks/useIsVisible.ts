import { ref, type Ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
function useIsVisible(target: Ref<HTMLDivElement | null>, threshold = 0) {
  const targetIsVisible = ref(false);
  const intersectionRatio = ref<number>(0);
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting, intersectionRatio }], observerElement) => {
      targetIsVisible.value = isIntersecting;
      intersectionRatio = intersectionRatio;
    }
  );

  return {
    targetIsVisible,
    intersectionRatio
  };
}

export default useIsVisible;
