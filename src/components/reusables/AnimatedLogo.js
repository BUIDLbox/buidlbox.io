import { Player } from '@lottiefiles/react-lottie-player';
import buildboxLogo from './buidlbox-logo.json';

function AnimatedLogo() {
  return (
    <Player
        autoplay
        hover
        src={buildboxLogo}
        style={{ height: '40px', width: '144px' }}
      >
      </Player>
  );
}

export default AnimatedLogo;