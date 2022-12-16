import './DescriptionBox.css';
import { useLayoutEffect, useRef } from 'react';
import lottie from "lottie-web";
import betterFuture from './better-future.json';
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function EmpowerAnimation() {
  const lottieRef = useRef();

  useLayoutEffect(() => {
    function LottieScrollTrigger(vars) {
      let playhead = {frame: 0},
        target = gsap.utils.toArray(vars.target)[0],
        speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
        st = {trigger: target, scrub: 1.8, start: 'center 90%', end: 'center 20%' },
        animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || "svg",
          loop: false,
          autoplay: false,
          animationData: vars.path
        });
      for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
      }
      const loadAnimation = () => {
        gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: st
        });
        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh(); 
      };
      animation.addEventListener("DOMLoaded", loadAnimation);
      return {animation, loadAnimation};
    };

    const {animation, loadAnimation} = LottieScrollTrigger({
      target: lottieRef.current,
      path: betterFuture,
      speed: "medium",
      scrub: 2 // seconds it takes for the playhead to "catch up"
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
     });

     return () => {
      animation.removeEventListener("DOMLoaded", loadAnimation);
      animation.destroy();
    }
  }, []);

  return (
    <div>
      <div style={{width: '237px', height: '364px'}} ref={lottieRef}></div>
    </div>
  );
}

export default EmpowerAnimation;