import './Logos.css';
import algorand from './algorand.svg';
import tezos from './tezos.svg';
import celo from './celo.svg';
import filecoin from './filecoin.svg';
import ledger from './ledger.svg';
import lukso from './lukso.svg';
import mask from './mask.svg';
import metis from './metis.svg';

function Logos() {

  const logos = [
    { src: algorand, alt: 'algorand' },
    { src: celo, alt: 'celo' },
    { src: lukso, alt: 'lukso' },
    { src: metis, alt: 'metis' },
    { src: tezos, alt: 'tezos' },
    { src: filecoin, alt: 'filecoin' },
    { src: mask, alt: 'mask' },
    { src: ledger, alt: 'ledger' },
  ];

  return (
    <section className="logos-container">
      {logos.map(logo => (
        <img key={logo.alt} className="logo-img" src={logo.src} alt={`${logo.alt} logo`} />
      ))}
    </section>
  );
}

export default Logos;