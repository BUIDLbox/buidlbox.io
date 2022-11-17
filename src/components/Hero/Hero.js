import lottie from "lottie-web";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import animationDataDesktop169 from "./hero-desktop-169.json";
import animationDataDesktop43 from "./hero-desktop-43.json";
import animationDataDesktop34 from "./hero-desktop-34.json";
import animationDataMobile189 from "./hero-mobile-189.json";
import './Hero.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const hero = useRef();
  const lottieRef = useRef();
  const heroTitle = useRef();
  const { width, height } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState();
  const [aspectRatioAnimation, setAspectRatioAnimation] = useState(animationDataDesktop169);
  const centeredText = aspectRatioAnimation === animationDataDesktop34 || aspectRatioAnimation === animationDataMobile189;

  useLayoutEffect(() => {
    window.matchMedia("(max-width: 35rem)").matches || width * 1.5 < height  ? setIsMobile(true) : setIsMobile(false);
    const aspectRatio = width / height;
    const aspectRatio169 = 16 / 9;
    const aspectRatio43 = 4 / 3;
    const aspectRatio34 = 3 / 4;
    const aspectRatio189 = 3 / 4;
    const isCloserToFirst = (checkNumber, number1, number2) => {
      const dist1 = Math.abs(checkNumber - number1);
      const dist2 = Math.abs(checkNumber - number2);
      if (dist1 < dist2) {
        return true;
      } else {
        return false;
      }
    };

    if (aspectRatio >= aspectRatio169 || isCloserToFirst(aspectRatio, aspectRatio169, aspectRatio43)) {
      setAspectRatioAnimation(animationDataDesktop169);
    } else if (aspectRatio >= aspectRatio43 || isCloserToFirst(aspectRatio, aspectRatio43, aspectRatio34)) {
      setAspectRatioAnimation(animationDataDesktop43)
    } else if (aspectRatio >= aspectRatio34 || isCloserToFirst(aspectRatio, aspectRatio34, aspectRatio189)) {
      setAspectRatioAnimation(animationDataDesktop34)
    } else {
      setAspectRatioAnimation(animationDataMobile189)
    };
  }, [width, height]);

  useLayoutEffect(() => {
    let gsap1, gsap2;
    function LottieScrollTrigger(vars) {
      let playhead = {frame: 0},
      target = gsap.utils.toArray(vars.target)[0],
      speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
      st = { trigger: vars.trigger, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 2 },
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        animationData: aspectRatioAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        }
      });
      for (let p in vars) {
        st[p] = vars[p];
      }

      const gsapAnimation = () => {
        gsap1 = gsap
        .to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          scrollTrigger: st,
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
        });

        const animObj = !centeredText ? {
          scrollTrigger: st,
          color: 'transparent',
          left: 'calc(100vw - 8 * var(--font-xl) - 9%)',
        } : {
          scrollTrigger: st,
          color: 'transparent',
          bottom: '20%',
        };
        gsap2 = gsap.to(heroTitle.current, animObj);

        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh(); 
      };

      animation.addEventListener("DOMLoaded", gsapAnimation);
      return { lottieAnimation: animation, gsapAnimation };
    }

    const {lottieAnimation, gsapAnimation} = LottieScrollTrigger({
      target: lottieRef.current,
      trigger: hero.current,
      path: aspectRatioAnimation,
      speed: "slow",
    });

    // clean-up
    return () => {
      lottieAnimation.removeEventListener("DOMLoaded", gsapAnimation);
      lottieAnimation.destroy();
      // lottie.destroy();
      gsap1 && gsap1.kill();
      gsap2 && gsap2.kill();
    }
  }, [isMobile, aspectRatioAnimation, centeredText]);

  return (
    <div ref={hero} className="hero">
      <div className="lottieContainer" ref={lottieRef}></div>
      <h1 ref={heroTitle} className={centeredText ? 'centered-text' : 'left-text'}>
        <span className="hero-gradient gradient-1">Empower<br/> changemakers</span>
        <span className="hero-gradient gradient-2"><br/> to thrive </span>
        <span className="hero-gradient gradient-3">in the <br/></span>
        <span className="hero-gradient gradient-3">digital frontier</span>
      </h1>
    </div>
  );
}

export default Hero;