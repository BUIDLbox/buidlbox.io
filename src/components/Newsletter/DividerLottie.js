import { useLayoutEffect, useRef } from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import { Player } from '@lottiefiles/react-lottie-player';
import divider from './divider.json';

function DividerLottie() {
  const lottieRef = useRef();
  const boxRef = useRef();
  const isAnimationVisible = useIsVisible(boxRef, 0.3);
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
    <div ref={boxRef}>
      <Player
        ref={lottieRef}
        autoplay={false}
        loop={false}
        // controls={true}
        keepLastFrame={true}
        src={divider}
        // style={{ height: '380px', width: '600px' }}
      ></Player>
    </div>
  );
}

export default DividerLottie;