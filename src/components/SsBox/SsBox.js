import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import DotsNavigation from "./DotsNavigation/DotsNavigation";
import './SsBox.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import useIsVisible from "../../hooks/useIsVisible";
const gsap = window.gsap;

function SsBox() {
  const img = useRef();
  const timeoutId = useRef();
  const isImgVisible = useIsVisible(img);
  const [activeStep, setActiveStep] = useState(0);
  const totalStepsIndex = 2;

  const changeStep = useCallback((index) => {
    const increaseStep = () => {
      if (activeStep === totalStepsIndex) {
        setActiveStep(0);
      } else {
        setActiveStep(prev => prev + 1);
      }
    };

    if (index === undefined) {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(increaseStep, 200);
    } else {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => setActiveStep(index), 200);
    };
    
    const tl = gsap.timeline();
    tl
      .to(img.current, {opacity: 0, duration: 0.2 })
      .to(img.current, {opacity: 1, duration: 0.3 });
    tl.play();
  }, [activeStep]);
    

  useEffect(() => {
  let intervalId;
  if (isImgVisible) {
    intervalId = setInterval(() => {
      changeStep();
    }, 4000);
  } else {
    intervalId && clearInterval(intervalId);
  }

    return () => intervalId && clearInterval(intervalId);
  }, [isImgVisible, changeStep]);

  // useEffect(() => {
  //   return () => timeoutId.current && clearInterval(timeoutId.current);
  // }, [activeStep]);

  const images = [img1, img2, img3];

  return (
    <section>
      <button onClick={changeStep}>incr</button>
      <img
        className="ss-img"
        onClick={changeStep}
        ref={img}
        loading="lazy"
        src={images[activeStep]}
        alt=""
        width="200"
        height="200"
      />
      <DotsNavigation totalSteps={totalStepsIndex} activeStepIndex={activeStep} changeStep={changeStep}/>
    </section>
  );
}

export default SsBox;