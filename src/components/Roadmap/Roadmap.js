import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './Roadmap.css';
import verticalTimelineImg from './vertical-timeline.svg';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const MotionPathPlugin = window.MotionPathPlugin;
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function RoadmapTexts() {
  return (
    <>
      <p className="text-1 font-xs"><span className="gradient bold">2019 - Gitcoin Hackathons</span></p>
      <p className="text-2 font-xs"><span className="gradient bold">Q1 2023 - buidlbox MVP</span></p>
      <p className="text-3 font-xs">
        <span className="gradient bold">Q2 2023 - Features</span><br/>
        White label hackathons<br/>
        Additional payment options<br/>
        SaaS and Guidl tiers<br/>
        Leaderboards
      </p>
      <p className="text-4 font-xs">
        <span className="gradient bold">Q3/Q4 2023 - Features</span><br/>
        Educational pathways<br/>
        NFT awards / credentialing<br/>
        Job boards<br/>
        Bounties<br/>
        Open hackathons
      </p>
    </>
  );
}

function Roadmap() {
  const [verticalTimeline, setVerticalTimeline] = useState(false);
  const { width } = useWindowDimensions();

  const pathRef = useRef();
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const opacityAnimation = () => {
      return {
        scrollTrigger: {trigger: pathRef.current, start: "center bottom", end: "center center", scrub: 1, invalidateOnRefresh: true},
        opacity: 1
      };
    };

    const animationOptions = (start, end) => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh(); 
      return {
        ease: "power1.inOut",
        scrollTrigger: {trigger: pathRef.current, start: "center bottom", end: "center center", scrub: 1, invalidateOnRefresh: true},
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start,
          end,
        },
      };
    }
    ScrollTrigger.sort();
    ScrollTrigger.refresh(); 
    let anim, anim2, anim3, anim4, t1, t2, t3, t4;
    if (!verticalTimeline) {
      anim = gsap.to(box1Ref.current, animationOptions(1, 0.99));
      anim2 = gsap.to(box2Ref.current, animationOptions(0.75, 0.65));
      anim3 = gsap.to(box3Ref.current, animationOptions(0.4, 0.26));
      anim4 = gsap.to(box4Ref.current, animationOptions(0.1, 0));
      t1 = gsap.to(text1.current, opacityAnimation());
      t2 = gsap.to(text2.current, opacityAnimation());
      t3 = gsap.to(text3.current, opacityAnimation());
      t4 = gsap.to(text4.current, opacityAnimation());
    };
    return () => {
      if (anim !== undefined) {
        anim.kill();
        anim2.kill();
        anim3.kill();
        anim4.kill();
        t1.kill();
        t2.kill();
        t3.kill();
        t4.kill();
      }
    }
  }, [verticalTimeline]);

  // const text = (input, index = 0) => {
  //   const y = 15 + index * 15;
  //   return (
  //   <text className="text-4" x="55" y={y} fill="var(--main-light-color)" font-size="1rem" font-family="Inter" font-weight="400">{input}</text>
  // )};
 
  useEffect(() => {
    window.matchMedia("(max-width: 47rem)").matches ? setVerticalTimeline(true) : setVerticalTimeline(false);
  }, [width]);
  
  const box1 = (
    <g ref={box1Ref}>
      <path transform="matrix(.984206 -.177029 .645463 .763792 18.5176 15.6475)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338732 -.940883 .645414 .763833 9.03516 41.9858)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.984195 -.177091 -.338792 .940861 36.584 37.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.984206 -.177029 .645463 .763792 9.03125 41.9824)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338732 -.940883 .645414 .763833 36.583 37.0264)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.338792 -.940861 .984195 -.177091 9.0332 41.9849)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box2 = (
    <g ref={box2Ref}>
      <path transform="matrix(.86601 .500028 .000032 1 24.7568 .830078)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 -.500028 -.000032 1 .514648 14.8276)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.866041 .499973 -.866041 .499972 24.7568 28.8218)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 .500028 .000032 1 .513672 14.8223)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.86601 -.500028 -.000032 1 24.7568 28.8198)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.866041 -.499972 .866041 .499973 .513672 14.8257)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box3 = (
    <g ref={box3Ref}>
      <path transform="matrix(-.338106 .941108 -.984065 .177808 60.1289 24.0518)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.646019 .763321 -.984076 .177746 42.0449 2.68408)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(-.338046 .94113 -.64597 -.763363 32.584 29.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(-.338106 .941108 -.984065 .177808 42.0498 2.68262)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.646019 .763321 -.984076 .177746 32.585 29.0278)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.64597 .763363 -.338046 .94113 42.0469 2.68311)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  const box4 = (
    <g ref={box4Ref}>
      <path transform="matrix(.471576 .881825 -.527841 .849343 50.1426 12.7974)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999473 .032452 -.527895 .84931 22.1641 11.8887)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.471632 .881795 -.999471 -.032516 35.3662 36.5713)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.471576 .881825 -.527841 .849343 22.166 11.8843)" fill="url(#B)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999473 .032452 -.527895 .84931 35.3672 36.5698)" fill="url(#C)" d="M0 0h27.993v27.993H0z"/><path transform="matrix(.999471 .032516 .471632 .881795 22.1641 11.8867)" fill="url(#A)" d="M0 0h27.993v27.993H0z"/><defs><linearGradient id="A" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#16dbbe"/><stop offset="1" stopColor="#e54de5"/></linearGradient><linearGradient id="B" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc800"/><stop offset="1" stopColor="#16dbbe"/></linearGradient><linearGradient id="C" x1="0" y1="13.836" x2="27.993" y2="13.836" gradientUnits="userSpaceOnUse"><stop stopColor="#e54de5"/><stop offset="1" stopColor="#ffc800"/></linearGradient></defs>
    </g>
  );

  return (
    <section className="roadmap">
      <Parallax speed={5} opacity={[0.3, 1]}>
        <h2>Roadmap</h2>
      </Parallax>
      {!verticalTimeline ? (
        <div className="roadmap-content">
          <svg width="953" height="400" viewBox="0 0 953 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d="M474 266C721.424 266 922 215.408 922 153C922 90.5918 721.424 40 474 40C226.576 40 26 90.5918 26 153" stroke="#407296" strokeWidth="2"/>
            {box1}
            {box2}
            {box3}
            {box4}
          </svg>
          <p ref={text1} className="text-1 font-xs"><span className="gradient bold">2019 - Gitcoin Hackathons</span></p>
          <p ref={text2} className="text-2 font-xs"><span className="gradient bold">Q1 2023 - buidlbox MVP</span></p>
          <p ref={text3} className="text-3 font-xs">
            <span className="gradient bold">Q2 2023 - Features</span><br/>
            White label hackathons<br/>
            Additional payment options<br/>
            SaaS and Guidl tiers<br/>
            Leaderboards
          </p>
          <p ref={text4} className="text-4 font-xs">
            <span className="gradient bold">Q3/Q4 2023 - Features</span><br/>
            Educational pathways<br/>
            NFT awards / credentialing<br/>
            Job boards<br/>
            Bounties<br/>
            Open hackathons
          </p>
        </div>
      ) : (
        <div className="vertical-timeline">
          <img src={verticalTimelineImg} alt="" />
          <div className="vertical-timeline-items"><RoadmapTexts /></div>
        </div>
      )}
    </section>
  );
}

export default Roadmap;