import './DescriptionBox.css';
import { useLayoutEffect, useRef } from 'react';
import lottie from "lottie-web";
import './DescriptionBox.css';
import collab from './collab.json';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function CollabLottie() {
  const tl = useRef();
  const lottieRef = useRef();
  const boxRef = useRef();
  useLayoutEffect(() => {
    function LottieScrollTrigger(vars) {
      let playhead = {frame: 0},
      target = gsap.utils.toArray(vars.target)[0],
      st = { trigger: vars.trigger, anticipatePin: 1, fastScrollEnd: true, start: "top 90%", end: "center center", scrub: 1.5 },
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        keepLastFrame: true,
        animationData: collab,
      });
      for (let p in vars) {
        st[p] = vars[p];
      }

      const gsapAnimation = () => {
        tl.current = gsap.timeline({scrollTrigger: st})
        .to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
        });

        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh(); 
      };

      animation.addEventListener("DOMLoaded", gsapAnimation);
      return { lottieAnimation: animation, gsapAnimation };
    }

    const {lottieAnimation, gsapAnimation} = LottieScrollTrigger({
      target: lottieRef.current,
      trigger: boxRef.current,
      path: collab,
      speed: "slow",
    });

    // clean-up
    return () => {
      lottieAnimation.removeEventListener("DOMLoaded", gsapAnimation);
      lottieAnimation.destroy();
      tl.current && tl.current.kill();
    }
  }, []);

  return (
    <div ref={boxRef} className="description-box-img-container">
      <div className="description-box-img" ref={lottieRef}></div>
    </div>
  );
}

export default CollabLottie;