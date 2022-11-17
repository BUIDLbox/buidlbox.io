import AnimatedLogo from '../reusables/AnimatedLogo';
import './Header.css';

function Header() {
  return (
    <header onClick={() => window.scrollTo(0, 0)}>
      <AnimatedLogo />
    </header>
  );
}

export default Header;