import { useEffect, useState, useRef } from "react";
import SwitchImg from "./SwitchImg/SwitchImg";
import './HackInABox.css';
import useIsVisible from "../../hooks/useIsVisible";
import Button from "../reusables/Button/Button";

function HackInABox() {
  const [selectedImg, setSelectedImg] = useState(0);
  const img = useRef();
  const isImgVisible = useIsVisible(img);

  useEffect(() => {
    const goNext = () => {
      if (selectedImg === 2) {
        setSelectedImg(0);
      } else {
        setSelectedImg(prev => prev + 1);
      }
    };
    let intervalId;
    if (isImgVisible) {
      intervalId = setInterval(() => {
        goNext();
      }, 4000);
    } else {
      intervalId && clearInterval(intervalId);
    }
  
      return () => intervalId && clearInterval(intervalId);
    }, [isImgVisible, selectedImg]);

  return (
    <section className="hack">
      <div className="hack-content">
        <h2>Hack-in-a-box</h2>
        <div className="hack-btns">
          <p onClick={() => setSelectedImg(0)} className={selectedImg === 0 ? 'selected-hack' : 'hack-item'}>Launch your own hackathon</p>
          <p onClick={() => setSelectedImg(1)} className={selectedImg === 1 ? 'selected-hack' : 'hack-item'}>Customize the experience</p>
          <p onClick={() => setSelectedImg(2)} className={selectedImg === 2 ? 'selected-hack' : 'hack-item'}>Gain valuable insights</p>
        </div>
        <Button text="Get in touch" link="" />
      </div>
      <div ref={img} className="hack-images">
        <SwitchImg selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      </div>
    </section>
  );
}

export default HackInABox;