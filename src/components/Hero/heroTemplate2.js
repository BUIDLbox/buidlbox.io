import lottie from "lottie-web";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import animationDataDesktop169 from "./hero-desktop-169.json";
import animationDataDesktop43 from "./hero-desktop-43.json";
import animationDataDesktop34 from "./hero-desktop-34.json";
import animationDataMobile189 from "./hero-mobile-189.json";
import './Hero.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// const gsap = window.gsap;
// const ScrollTrigger = window.ScrollTrigger;
// import gsap from "gsap";

// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const hero = useRef();
  const tl = useRef();
  const lottieRef = useRef();
  const heroTitle = useRef();
  // const { width, height } = useWindowDimensions();
  const [aspectRatioAnimation, setAspectRatioAnimation] = useState(animationDataDesktop169);
  const centeredText = aspectRatioAnimation === animationDataDesktop34 || aspectRatioAnimation === animationDataMobile189;

  // useEffect(() => {
  //   const aspectRatio = width / height;
  //   const aspectRatio169 = 16 / 9;
  //   const aspectRatio43 = 4 / 3;
  //   const aspectRatio34 = 3 / 4;
  //   const aspectRatio189 = 3 / 4;
  //   const isCloserToFirst = (checkNumber, number1, number2) => {
  //     const dist1 = Math.abs(checkNumber - number1);
  //     const dist2 = Math.abs(checkNumber - number2);
  //     if (dist1 < dist2) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  //   if (aspectRatio >= aspectRatio169 || isCloserToFirst(aspectRatio, aspectRatio169, aspectRatio43)) {
  //     setAspectRatioAnimation(animationDataDesktop169);
  //   } else if (aspectRatio >= aspectRatio43 || isCloserToFirst(aspectRatio, aspectRatio43, aspectRatio34)) {
  //     setAspectRatioAnimation(animationDataDesktop43)
  //   } else if (aspectRatio >= aspectRatio34 || isCloserToFirst(aspectRatio, aspectRatio34, aspectRatio189)) {
  //     setAspectRatioAnimation(animationDataDesktop34)
  //   } else {
  //     setAspectRatioAnimation(animationDataMobile189)
  //   };
  // }, [width, height]);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
      // let playhead = {frame: 0},
      // // target = gsap.utils.toArray(lottieRef.current)[0],
      // animation = lottie.loadAnimation({
      //   container: lottieRef.current,
      //   renderer: "canvas",
      //   loop: false,
      //   autoplay: false,
      //   animationData: animationDataDesktop169,
      //   rendererSettings: {
      //     preserveAspectRatio: 'xMidYMid slice',
      //   }
      // });
      // tl.current = gsap.timeline().to(lottieRef.current, {
      //   color: '#FF0000',
      // });
      // gsap
      // .to(playhead, {
      //   frame: animation.totalFrames - 1,
      //   ease: "none",
      //   scrollTrigger: { trigger: hero.current, markers: true, pin: true, start: "top top", end: "+=2000", scrub: 2 },
      //   onUpdate: () => animation.goToAndStop(playhead.frame, true),
      // });
      let ctx = gsap.context(() => {
    
        // all our animations can use selector text like ".box" 
        // and it's properly scoped to our component
        tl.current = gsap.timeline({scrollTrigger: {trigger: hero.current,
          markers: true,
          pin: true,
          start: "top top",
          end: "+=2000",
          scrub: 2,}})
          .to(".lottieContainer", {color: '#FF0000', }
        );
        
      }, hero); // <- IMPORTANT! Scopes selector text
      
      return () => ctx.revert(); // cleanup
      // ScrollTrigger.create({
      //   animation: tl.current,
      //   trigger: lottieRef.current,
      //   markers: true,
      //   pin: true,
      //   start: "top top",
      //   end: "+=2000",
      //   scrub: 2,
      //   });
      // const handleLoad = () => {
      //   if (gsap.scrollTrigger) gsap.scrollTrigger.refresh();
      //   ScrollTrigger.refresh();
      //   ScrollTrigger.sort();
      // }
      // window.addEventListener('load', handleLoad);

        // const animObj = !centeredText ? {
        //   scrollTrigger: st,
        //   color: 'transparent',
        //   left: 'calc(100vw - 8 * var(--font-xl) - 9%)',
        // } : {
        //   scrollTrigger: st,
        //   color: 'transparent',
        //   bottom: '20%',
        // };
        // gsap2 = gsap.to(heroTitle.current, animObj);

        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        // ScrollTrigger.sort();
        // ScrollTrigger.refresh(); 
      // };

      // animation.addEventListener("DOMLoaded", gsapAnimation);
      // return { lottieAnimation: animation, gsapAnimation };
    // }

    // const {lottieAnimation, gsapAnimation} = LottieScrollTrigger({
    //   target: lottieRef.current,
    //   trigger: hero.current,
    //   path: animationDataDesktop169,
    //   speed: "slow",
    // });

    // clean-up
    // return () => {
    //   ScrollTrigger.kill();
    //   tl.kill();
    //   // window.removeEventListener('load', handleLoad);
    //   // animation.destroy();

    // }
  }, []);

  return (
    
    <div ref={hero} className="hero" id="hero">
      {/* <div className="lottieContainer" ref={lottieRef}></div> */}
      <div className="lottieContainer" ref={lottieRef}>lorem</div>
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