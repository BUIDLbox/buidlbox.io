import { useEffect, useState } from "react";

function useIsVisible(ref, threshold = 0) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(refCurrent);
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default useIsVisible;