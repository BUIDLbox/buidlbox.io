import "./announcements.css";
import '../reusables/carousel.css';
import zksyncLogo from "./zkSync-logo-vertical.svg";
import Button from "../reusables/Button/Button";
import { Parallax } from "react-scroll-parallax";
import ethdenver from "./ethdenver.png";
import ethHeader from "./eth-header.png";
import horizen from "./horizen.svg";
import CollabCard from "./CollabCard";
import { useEffect, useRef, useState } from "react";
import useIsVisible from "../../hooks/useIsVisible";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DotsNavigation from '../reusables/DotsNavigation/DotsNavigation';
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function Announcements() {  
  const data = [
    {
      component:
        <CollabCard
          title="Bringing Together Web3 Builder Communities Through Hackathons"
          collabLogo={horizen}
          collabLogoSize={{ width: 135, height: 25 }}
          collabName="Horizen"
        >
          <Button
            newTab={true}
            text="Read more"
            link="https://blog.horizen.io/horizen-partners-with-buidlbox-to-bring-together-web3-builder-communities-through-hackathons/"
          />
        </CollabCard>
    },
    {
      component:
        <CollabCard
          title="zkSync is Buidling Community with buidlbox"
          collabLogo={zksyncLogo}
          collabLogoSize={{width: 97, height: 70}}
          collabName="zkSync"
        >
          <Button
            newTab={true}
            text="Read more"
            link="https://blog.matter-labs.io/buidling-community-with-buidlbox-b2d2c9797497"
          />
        </CollabCard>
    }, {
      component:
        <CollabCard
          title="buidlbox set to be the official BUIDLer platform of ETHDenver"
          collabLogo={ethdenver}
          collabLogoSize={{ width: 67, height: 70 }}
          collabName="ETHDenver"
        >
          <div style={{ alignSelf: "center" }}>
            <img
              class="ethdenver-banner"
              src={ethHeader}
              alt="ethdenver header"
            />
          </div>
        </CollabCard>
    }
  ];

  const [clickDisabled, setClickDisabled] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);

  data.unshift(data[data.length - 1]);
  data.push(data[1]);

  const { width } = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const [startTouch, setStartTouch] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(true);
  const ref = useRef();
  const isRefVisible = useIsVisible(ref);

  const intervalId = useRef(null);

  useEffect(() => {
    window.matchMedia("(max-width: 31.25rem)").matches
      ? setIsMobile(true)
      : setIsMobile(false);
  }, [width]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
    setStartTouch(activeSlide);
  };

  useEffect(() => {
    if (activeSlide === data.length - 1) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransition(false);
        setActiveSlide(1);
      }, 300);
    }

    if (activeSlide === 1) {
      setTimeout(() => {
        setHasTransition(true);
      }, 300);
    }

    if (activeSlide === 0) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransition(false);
        setActiveSlide(data.length - 2);
      }, 300);
    }

    if (activeSlide === data.length - 2) {
      setTimeout(() => {
        setHasTransition(true);
      }, 300);
    }
  }, [activeSlide, data.length]);

  useEffect(() => {
    if (clickDisabled) {
      setTimeout(() => {
        setClickDisabled(false);
      }, 300 * 2);
    }
  }, [clickDisabled]);

  useEffect(() => {
    const start = () => {
      // if (intervalId.current != null) {
      //   return;
      // }
      intervalId.current = setInterval(() => {
        setActiveSlide((prevVisibleSlide) => {
          if (prevVisibleSlide + 1 === data.length) {
            return 0;
          }
          return prevVisibleSlide + 1;
        });
      }, 4000);
    };
    isRefVisible ? start() : stopInterval();

    return () => clearInterval(intervalId.current);
  }, [data.length, isRefVisible]);

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      goToStep(startTouch + 1);
      stopInterval();
    }
    if (diff < -5) {
      goToStep(startTouch - 1);
      stopInterval();
    }

    setTouchPosition(null);
  };

  const stopInterval = () => {
    intervalId.current && clearInterval(intervalId.current);
  };

  const goToStep = (index) => {
    stopInterval();
    setActiveSlide(index);
  };

  return (
    <div className="announcements">
      <Parallax speed={5} opacity={[0.3, 1]}>
        <h2>Announcements</h2>
        </Parallax>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        ref={ref}
        // 1.8rem = gap, 60vw = activeSlide width
        style={{
          gap: `${
            isMobile || isFullscreen
              ? '0rem'
              : '1.8rem'
          }`,
          transform: `${
            isMobile || isFullscreen
              ? `translate(calc(-${activeSlide * 100}vw))`
              : `translate(calc(-${
                  activeSlide * 60
                }vw - 0.4rem - calc(${activeSlide} * 1.8rem) + 20vw))`
          }`,
          transition: !hasTransition ? "none" : "all 0.3s linear",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{
              pointerEvents: `${clickDisabled ? "none" : ""}`,
              width: `${isFullscreen || isMobile ? "100vw" : "60vw"}`,
            }}
            onClick={() => goToStep(index)}
            className={`
              carousel-item ${
                activeSlide === index &&
                index !== 0 &&
                index !== data.length - 1
                  ? "carousel-item-active"
                  : ""
              }`}
            key={`testimonial-${index}`}
          >
            {item.component}
          </div>
        ))}
      </div>
      <DotsNavigation
        totalSteps={data.length - 3}
        activeStepIndex={activeSlide - 1}
        changeStep={goToStep}
      />
    </div>
  );
}

export default Announcements;
