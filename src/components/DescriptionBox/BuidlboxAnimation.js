import './DescriptionBox.css';
import { useEffect, useLayoutEffect, useRef } from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import buidlbox from './buidlbox-icon.json';
import { Player } from '@lottiefiles/react-lottie-player';
import './DescriptionBox.css';

function BuidlboxAnimation() {
  const lottieRef = useRef();
  const boxRef = useRef();
  const isAnimationVisible = useIsVisible(boxRef, 0.8);
  useEffect(() => {
    if (isAnimationVisible) {
      lottieRef.current.play();
      lottieRef.current.setPlayerDirection(1);
    } else {
      lottieRef.current.play();
      lottieRef.current.setPlayerDirection(-1);
    };
  }, [isAnimationVisible]);

  return (
    <div ref={boxRef}>
      <Player
        className="description-box-img"
        ref={lottieRef}
        autoplay={false}
        loop={false}
        // controls={true}
        keepLastFrame={true}
        src={buidlbox}
        style={{ height: '200px', width: '200px' }}
      ></Player>
    </div>
  );
}

export default BuidlboxAnimation;