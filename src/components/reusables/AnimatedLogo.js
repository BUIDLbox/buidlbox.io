import { Player } from '@lottiefiles/react-lottie-player';
import buildboxLogo from './buidlbox-logo.json';

function AnimatedLogo() {
  return (
    <div onClick={() => window.scrollTo(0, 0)}>
      <Player
        autoplay
        hover
        src={buildboxLogo}
        style={{ height: '40px', width: '144px', cursor: 'pointer' }}
      >
      </Player>
    </div>
  );
}

export default AnimatedLogo;