import AnimatedLogo from '../reusables/AnimatedLogo';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <AnimatedLogo />
      <p>
        <a className="main-link" href="https://twitter.com/buidlbox">Twitter</a><span>{' /// '}</span>
        <a className="main-link" href="https://twitter.com/buidlbox">Discord</a><span>{' /// '}</span>
        <a className="main-link" href="https://supermodular.xyz/">Supermodular</a>
      </p>
    </footer>
  );
}

export default Footer;