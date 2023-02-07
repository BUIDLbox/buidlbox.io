import { useEffect, useRef } from "react";
import buidlboxLogo from "./buidlbox-vertical.svg";
import "./announcements.css";

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function CollabCard({title, collabLogo, collabLogoSize, collabName, children}) {
  const dividerRef = useRef();
  useEffect(() => {
    let anim;
    const obj = {
      scrollTrigger: {
        trigger: dividerRef.current,
        toggleActions: "restart none none reverse",
      },
      duration: 2.5,
      width: "100%",
    };
    anim = gsap.to(dividerRef.current, obj);
    // anim2 = gsap.to(divider2.current, obj);

    return () => anim && anim.kill();
  }, []);
  return (
    <div className="collab-card">
      <div className="collab-card_inner">
        <div className="collab-card_logos">
          <img
            src={buidlboxLogo}
            alt="buidlbox logo"
            width={106}
            height={70}
          />
          <div ref={dividerRef} className="collab-card_logos-divider"></div>
          <img src={collabLogo} alt={`${collabName} logo`} width={collabLogoSize.width} height={collabLogoSize.height} />
        </div>
        <div className="collab-card_content">
          <p className="font-m">
            {title}
          </p>
          <div style={{ alignSelf: "center" }}>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabCard;