import AnimatedLogo from '../reusables/AnimatedLogo';
import Button from '../reusables/Button/Button';
import './Header.css';

function Header() {
  return (
    <header onClick={() => window.scrollTo(0, 0)}>
      <AnimatedLogo />
      <Button text="Request a demo" small={true} link={`mailto:buidlbox@supermodular.xyz?subject=buidlbox%3A%20Demo%20request&body=%F0%9F%91%8B%20Hello%20buidlbox%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo!%20Here's%20my%20info%3A%0A%0A%3C!--%20Please%20enter%20your%20details%20below%20--%3E%0AOrganization%20name%3A%20%5BYour%20organization's%20name%5D%0AWork%20email%3A%20%5BYour%20work%20email%20address%5D%0AFull%20name%3A%20%5BYour%20name%5D%0ATime%20zone%3A%20%5BPST%2FEST%2FCET%2Fetc%5D`} />
    </header>
  );
}

export default Header;