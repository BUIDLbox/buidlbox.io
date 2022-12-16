import './DescriptionBox.css';
import { useLayoutEffect, useRef } from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import { Player } from '@lottiefiles/react-lottie-player';
import './DescriptionBox.css';


function ViewportLottie({animation}) {
  const lottieRef = useRef();
  const boxRef = useRef();
  const isAnimationVisible = useIsVisible(boxRef, 0.7);
  useLayoutEffect(() => {
    if (isAnimationVisible) {
      lottieRef.current.play();
      lottieRef.current.setPlayerDirection(1);
    } else {
      lottieRef.current.play();
      lottieRef.current.setPlayerDirection(-1);
    };
  }, [isAnimationVisible]);

  return (
    <div ref={boxRef} className="description-box-img-container">
      <Player
        className="description-box-img"
        ref={lottieRef}
        autoplay={false}
        loop={false}
        // controls={true}
        keepLastFrame={true}
        src={animation}
        // style={{ height: '380px', width: '600px' }}
      ></Player>
    </div>
  );
}

export default ViewportLottie;