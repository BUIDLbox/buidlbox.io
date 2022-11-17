import { useLayoutEffect, useRef } from "react";
import './Roadmap.css';

const gsap = window.gsap;
const MotionPathPlugin = window.MotionPathPlugin;
gsap.registerPlugin(MotionPathPlugin);
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function Roadmap() {
  const pathRef = useRef();
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();

  useLayoutEffect(() => {
    const animationOptions = (start, end) => {
      return {
        ease: "power1.inOut",
        scrollTrigger: {trigger: pathRef.current, start: "center bottom", end: "center center", scrub: 1},
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start,
          end,
        }
      };
    }
    const anim = gsap.to(box1Ref.current, animationOptions(1, 0.99));
    const anim2 = gsap.to(box2Ref.current, animationOptions(0.75, 0.65));
    const anim3 = gsap.to(box3Ref.current, animationOptions(0.4, 0.26));
    const anim4 = gsap.to(box4Ref.current, animationOptions(0.1, 0));

    return () => {
      anim.kill();
      anim2.kill();
      anim3.kill();
      anim4.kill();
    }
  }, []);

  const box1 = (
    <g ref={box1Ref}>
      {/* <text x="-55" y="55" fill="var(--main-light-color)" font-size="1rem" font-family="Inter" font-weight="400">2018 - Gitcoin</text> */}
      <path transform="matrix(.984206 -.177029 .645463 .763792 18.5176 15.6475)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338732 -.940883 .645414 .763833 9.03516 41.9858)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.984195 -.177091 -.338792 .940861 36.584 37.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.984206 -.177029 .645463 .763792 9.03125 41.9824)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338732 -.940883 .645414 .763833 36.583 37.0264)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338792 -.940861 .984195 -.177091 9.0332 41.9849)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box2 = (
    <g ref={box2Ref}>
      {/* <text x="55" y="15" fill="var(--main-light-color)" font-size="1rem" font-family="Inter" font-weight="400">2018 - Gitcoin</text> */}
      <path transform="matrix(.86601 .500028 .000032 1 24.7568 .830078)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 -.500028 -.000032 1 .514648 14.8276)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.866041 .499973 -.866041 .499972 24.7568 28.8218)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 .500028 .000032 1 .513672 14.8223)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 -.500028 -.000032 1 24.7568 28.8198)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.866041 -.499972 .866041 .499973 .513672 14.8257)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box3 = (
    <g ref={box3Ref}>
      {/* <text x="55" y="15" fill="var(--main-light-color)" font-size="1rem" font-family="Inter" font-weight="400">2018 - Gitcoin</text> */}
      <path transform="matrix(-.338106 .941108 -.984065 .177808 60.1289 24.0518)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.646019 .763321 -.984076 .177746 42.0449 2.68408)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(-.338046 .94113 -.64597 -.763363 32.584 29.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(-.338106 .941108 -.984065 .177808 42.0498 2.68262)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.646019 .763321 -.984076 .177746 32.585 29.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.64597 .763363 -.338046 .94113 42.0469 2.68311)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box4 = (
    <g ref={box4Ref}>
      {/* <text x="55" y="15" fill="var(--main-light-color)" font-size="1rem" font-family="Inter" font-weight="400">2018 - Gitcoin</text> */}
      <path transform="matrix(.471576 .881825 -.527841 .849343 50.1426 12.7974)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999473 .032452 -.527895 .84931 22.1641 11.8887)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.471632 .881795 -.999471 -.032516 35.3662 36.5713)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.471576 .881825 -.527841 .849343 22.166 11.8843)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999473 .032452 -.527895 .84931 35.3672 36.5698)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999471 .032516 .471632 .881795 22.1641 11.8867)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  return (
    <section className="roadmap">
      <h2>Roadmap</h2>
      <div className="roadmap-content">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 962 292" width="962" height="292" fill="none">
          <path ref={pathRef} d="M483 255C730.424 255 931 204.408 931 142C931 79.5918 730.424 29 483 29C235.576 29 35 79.5918 35 142" stroke="#FFF1E2"/>
          {box1}
          {box2}
          {box3}
          {box4}
        </svg>
      </div>
    </section>
  );
}

export default Roadmap;