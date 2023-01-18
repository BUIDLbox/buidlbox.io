import './ZkSyncCollab.css';
import buidlboxLogo from './buidlbox-logo.svg';
import zksyncLogo from './zksync-logo.svg';
import { useEffect, useRef } from 'react';
import Button from '../reusables/Button/Button';
import { Parallax } from 'react-scroll-parallax';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function ZkSyncCollab() {
  const divider1 = useRef();

  useEffect(() => {
    let anim;
    anim = gsap.to(divider1.current, {
      scrollTrigger: {
        trigger: divider1.current,
        toggleActions: 'restart none none reverse',
        
      },
      duration: 2.5,
      width: '100%',
      
    });

    return () => anim && anim.kill();
  }, []);

  return (
    <div className="announcements">
      <Parallax speed={5} opacity={[0.3, 1]}>
        <h2>Announcements</h2>
      </Parallax>
    
      <div className="zkSync-collab">
        <div className="zkSync-collab_inner">
          <div className="zkSync-collab_logos">
            <img src={buidlboxLogo} alt="buidlbox logo" width={180} height={45}/>
            <div ref={divider1} className="zkSync-collab_logos-divider">
            </div>
            <img src={zksyncLogo} alt="zkSync logo" width={200} height={39}/>
          </div>
          <div className="zkSync-collab_content">
            <p className="font-m">
              zkSync is Buidling Community with buidlbox
            </p>
            <div style={{ alignSelf: 'center' }}>   
              <Button text="Read more" link='https://blog.matter-labs.io/buidling-community-with-buidlbox-b2d2c9797497' />
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZkSyncCollab;