import lottie from "lottie-web";
// import Lottie from '  ';
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import animationDataDesktop169 from "./hero-desktop-169.json";
import animationDataDesktop43 from "./hero-desktop-43.json";
import animationDataDesktop34 from "./hero-desktop-34.json";
import animationDataMobile189 from "./hero-mobile-189.json";
import './Hero.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const hero = useRef();
  const lottieRef = useRef();
  const heroTitle = useRef();
  const xRef = useRef();
  const tlRef = useRef();
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
    // v2

    // tl.to(xRef.current, {x: '200px'}, 0);
    let frameNumber = 51 - 1;
    let playhead = { frame: 1 };
    const animObj = !centeredText ? {
      // scrollTrigger: st,
      color: 'transparent',
      left: 'calc(100vw - 8 * var(--font-xl) - 9%)',
    } : {
      // scrollTrigger: st,
      color: 'transparent',
      bottom: '20%',
    };
    tlRef.current = gsap.timeline()
    .to(playhead, {
      frame: frameNumber,
      // snap: "frame",
      ease: "none",
      onUpdate: () => lottieRef.current && lottieRef.current.setSeeker(playhead.frame),
    })
    // .to(heroTitle.current, animObj, 0);
    // gsapAnimation();
    // if (lottieAnimation) {
    // lottieAnimation.addEventListener("DOMLoaded", gsapAnimation);
    ScrollTrigger.create({
      invalidateOnRefresh: true,
      anticipatePin: 1,
      animation: tlRef.current,
      trigger: hero.current,
      pin: true,
      start: "top top",
      end: () => "+=2000",
      scrub: true
      // markers: true
      });
    const handleLoad = () => {
      // gsapAnimation();
      ScrollTrigger.refresh();
      ScrollTrigger.sort();
    }
    window.addEventListener('load', handleLoad);
    // }
    // clean-up
    return () => {
      window.removeEventListener('load', handleLoad);
      // if (lottieAnimation) {
      // lottieAnimation.removeEventListener("DOMLoaded", gsapAnimation);
      // lottieAnimation.destroy();
      // }
      // lottie.destroy(lottieAnimation);
      // gsap1 && gsap1.kill();
      // gsap2 && gsap2.kill();
      ScrollTrigger.kill();
      tlRef.current && tlRef.current.kill();
    }
  }, [centeredText]);

  return (
    <div ref={hero} style={{ width: '100vw', height: '100vh' }}>
      {/* <div className="lottieContainer" ref={lottieRef}></div>
       */}
       <Player
        // className="lottieContainer"
        
        ref={lottieRef}
        autoplay={false}
        loop={false}
        // controls={true}
        keepLastFrame={true}
        src={aspectRatioAnimation}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
        }}
        style={{ height, width }}
      >
        {/* <Controls visible={true}
      darkTheme={true}
      buttons={['play', 'repeat', 'frame', 'stop']}/> */}
      </Player>
      {/* <p ref={xRef}>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/>fsdfsdfds<br/></p> */}
      {/* <h1 ref={heroTitle} className={centeredText ? 'centered-text' : 'left-text'}>
        <span className="hero-gradient gradient-1">Empower<br/> changemakers</span>
        <span className="hero-gradient gradient-2"><br/> to thrive </span>
        <span className="hero-gradient gradient-3">in the <br/></span>
        <span className="hero-gradient gradient-3">digital frontier</span>
      </h1> */}
    </div>
  );
}

export default Hero;