import './WhatIsBuidlbox.css';
import home1 from './home-1.png';
import home12x from './home-1-2x.png';
import home2 from './home-2.png';
import home22x from './home-2-2x.png';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import animation from './what-buidlbox.svg';

function WhatIsBuidlbox() {
  const [currentFirstImg, setCurrentFirstImg] = useState(true);

  return (
    <>
      <div className="buidlbox-section-description">
        <div className='buidlbox-section-description-inner'>
          <div style={{ minWidth: '60%'}}>
            <Parallax speed={2} opacity={[0.3, 1]}>
              <h2 className='font-xxl'>What is buidlbox?</h2>
            </Parallax>
            <p className="font-l"><span className="bold-p">buidlbox</span> is a hackathon platform that provides both buidlers and guidls with innovative tools to grow ecosystems and buidl a better web.</p>
          </div>
          <div className="animation-container">
            <img style={{maxWidth: '100%', height: 'auto'}} src={animation} alt="" width="400" height="400" />
          </div>
        </div>
      </div>
      <section className="buidlbox-section">
        <div className='buidlbox-slides-images'>
          <picture>
            <source
              srcSet={`${home1} 1x,
              ${home12x} 2x,`}
              width='1060' height='687'
            />
            <img className={currentFirstImg ? 'front-ss' : 'back-ss'} src={home1} width='1060' height='687' alt='buidlbox platform' />
          </picture>
          <picture>
            <source
              srcSet={`${home2} 1x,
              ${home22x} 2x,`}
              width='1060' height='687'
            />
            <img className={currentFirstImg ? 'back-ss' : 'front-ss'} src={home2} width='1060' height='687' alt='buidlbox platform' />
          </picture>
        </div>
        
        <div className='buidlbox-slides-links'>
          <div
            onClick={() => setCurrentFirstImg(true)}
            className={currentFirstImg ? 'main-link active' : 'main-link'}
          >Create a hackathon</div>
          <div
            onClick={() => setCurrentFirstImg(false)}
            className={currentFirstImg ? 'main-link' : 'main-link active'}
          >Join a hackathon</div>
        </div>
      </section>
    </>
  );
}

export default WhatIsBuidlbox;