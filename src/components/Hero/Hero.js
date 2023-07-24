import lottie from "lottie-web";
import { useLayoutEffect, useRef } from "react";
import "./Hero.css";
import heroAnimation from "./hero-logo.json";
import Button from "../reusables/Button/Button";
import mixpanel from "../../plugins/Mixpanel";

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const tl = useRef();
  const hero = useRef();
  const lottieRef = useRef();

  useLayoutEffect(() => {
    const isMobile = window.matchMedia("(max-width: 37.5rem)").matches;
    const end = isMobile ? "+=800" : "+=1500";
    function LottieScrollTrigger(vars) {
      ScrollTrigger.refresh();
      let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        st = {
          trigger: vars.trigger,
          anticipatePin: 1,
          fastScrollEnd: true,
          pin: true,
          start: "top top",
          end: end,
          scrub: 1.5,
        },
        animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || "svg",
          loop: false,
          autoplay: false,
          keepLastFrame: true,
          animationData: heroAnimation,
        });
      for (let p in vars) {
        st[p] = vars[p];
      }

      const gsapAnimation = () => {
        tl.current = gsap.timeline({ scrollTrigger: st }).to(playhead, {
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

    const { lottieAnimation, gsapAnimation } = LottieScrollTrigger({
      target: lottieRef.current,
      trigger: hero.current,
      path: heroAnimation,
      speed: "slow",
    });

    // clean-up
    return () => {
      lottieAnimation.removeEventListener("DOMLoaded", gsapAnimation);
      lottieAnimation.destroy();
      tl.current && tl.current.kill();
    };
  }, []);

  return (
    <div ref={hero} className="hero">
      <div className="hero-inner">
        <div className="lottieContainer" ref={lottieRef}></div>
        <div className="hero-text">
          <h1>
            <span className="hero-gradient gradient-1">
              Hackathons <br />
            </span>
            <span>
              <span className="hero-gradient gradient-2">made </span>
              <span className="hero-gradient gradient-3">easy</span>
              <span className="hero-gradient gradient-1">.</span>
            </span>
          </h1>
          <Button
            handleClick={() =>
              mixpanel.track("Buy Hackathons", {
                type: "lead",
              })
            }
            text="Launch app"
            hero={true}
            link={`https://app.buidlbox.io/`}
          />
        </div>
        <svg
          className="hero-bg"
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={{ filter: "blur(15px)" }}>
            <circle
              cx="1415"
              cy="726"
              r="81.1813"
              transform="rotate(39.4085 1415 726)"
              fill="url(#paint0_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(20px)" }}>
            <circle
              cx="401.261"
              cy="0.261419"
              r="81.1813"
              transform="rotate(39.4085 401.261 0.261419)"
              fill="url(#paint1_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(19px)" }}>
            <circle
              cx="397.702"
              cy="892.701"
              r="21.1024"
              transform="rotate(39.4085 397.702 892.701)"
              fill="url(#paint2_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(20px)" }}>
            <circle
              cx="704.702"
              cy="287.701"
              r="21.1024"
              transform="rotate(39.4085 704.702 287.701)"
              fill="url(#paint3_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(13px)" }}>
            <circle
              cx="1218"
              cy="360"
              r="46"
              fill="url(#paint4_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(12px)" }}>
            <circle
              cx="793"
              cy="835"
              r="46"
              fill="url(#paint5_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(17px)" }}>
            <circle
              cx="1194.5"
              cy="921.5"
              r="23.5"
              fill="url(#paint6_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(24px)" }}>
            <circle
              cx="971.5"
              cy="584.5"
              r="38.5"
              fill="url(#paint7_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(17px)" }}>
            <circle
              cx="466.5"
              cy="512.5"
              r="23.5"
              fill="url(#paint8_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(22px)" }}>
            <circle
              cx="200"
              cy="254"
              r="37"
              fill="url(#paint9_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(20px)" }}>
            <circle
              cx="1324.5"
              cy="119.5"
              r="23.5"
              fill="url(#paint10_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(13px)" }}>
            <circle
              cx="126"
              cy="715"
              r="74"
              fill="url(#paint11_linear_1485_3)"
            />
          </g>
          <g style={{ filter: "blur(13px)" }}>
            <circle
              cx="925"
              cy="96"
              r="47"
              fill="url(#paint12_linear_1485_3)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1485_3"
              x="1283.82"
              y="594.816"
              width="262.367"
              height="262.367"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter1_f_1485_3"
              x="270.078"
              y="-130.922"
              width="262.367"
              height="262.367"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter2_f_1485_3"
              x="364.599"
              y="859.598"
              width="66.2061"
              height="66.206"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="6"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter3_f_1485_3"
              x="671.599"
              y="254.598"
              width="66.2061"
              height="66.206"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="6"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter4_f_1485_3"
              x="1122"
              y="264"
              width="192"
              height="192"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter5_f_1485_3"
              x="722"
              y="764"
              width="142"
              height="142"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12.5"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter6_f_1485_3"
              x="1151"
              y="878"
              width="87"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter7_f_1485_3"
              x="913"
              y="526"
              width="117"
              height="117"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter8_f_1485_3"
              x="423"
              y="469"
              width="87"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter9_f_1485_3"
              x="143"
              y="197"
              width="114"
              height="114"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter10_f_1485_3"
              x="1281"
              y="76"
              width="87"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter11_f_1485_3"
              x="2"
              y="591"
              width="248"
              height="248"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="25"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <filter
              id="filter12_f_1485_3"
              x="853"
              y="24"
              width="144"
              height="144"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12.5"
                result="effect1_foregroundBlur_1485_3"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1485_3"
              x1="1333.82"
              y1="725.067"
              x2="1496.18"
              y2="725.067"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#16DBBE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1485_3"
              x1="320.08"
              y1="-0.671672"
              x2="482.443"
              y2="-0.671674"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#16DBBE" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1485_3"
              x1="376.599"
              y1="892.459"
              x2="418.804"
              y2="892.459"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#16DBBE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1485_3"
              x1="683.599"
              y1="287.459"
              x2="725.804"
              y2="287.459"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#16DBBE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1485_3"
              x1="1172"
              y1="359.471"
              x2="1264"
              y2="359.471"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16DBBE" />
              <stop offset="1" stopColor="#E54DE5" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1485_3"
              x1="747"
              y1="834.471"
              x2="839"
              y2="834.471"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16DBBE" />
              <stop offset="1" stopColor="#E54DE5" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1485_3"
              x1="1171"
              y1="921.23"
              x2="1218"
              y2="921.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E54DE5" />
              <stop offset="1" stopColor="#FFC800" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1485_3"
              x1="933"
              y1="584.057"
              x2="1010"
              y2="584.057"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E54DE5" />
              <stop offset="1" stopColor="#FFC800" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1485_3"
              x1="443"
              y1="512.23"
              x2="490"
              y2="512.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16DBBE" />
              <stop offset="1" stopColor="#E54DE5" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_1485_3"
              x1="163"
              y1="253.575"
              x2="237"
              y2="253.575"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E54DE5" />
              <stop offset="1" stopColor="#FFC800" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_1485_3"
              x1="1301"
              y1="119.23"
              x2="1348"
              y2="119.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E54DE5" />
              <stop offset="1" stopColor="#FFC800" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_1485_3"
              x1="52"
              y1="714.149"
              x2="200"
              y2="714.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#16DBBE" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_1485_3"
              x1="878"
              y1="95.4598"
              x2="972"
              y2="95.4598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E54DE5" />
              <stop offset="1" stopColor="#FFC800" />
            </linearGradient>
            <clipPath id="clip0_1485_3">
              <rect width="1440" height="1024" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
