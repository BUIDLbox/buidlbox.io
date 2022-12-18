import { useCallback, useEffect, useRef, useState } from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import DotsNavigation from './DotsNavigation/DotsNavigation';
import './Testimonials.css';
import ethShanghai from './assets/ETHShanghai.svg';
import everscale from './assets/Everscale.svg';
import lukso from './assets/Lukso.svg';
import tezos from './assets/Tezos.svg';
import reserve from './assets/reserve.svg';
import ivan from './assets/ivan.jpg';
import kitti from './assets/kitti.jpg';
import jonathan from './assets/jonathan.jfif';
import daphne from './assets/daphne.jpg';
import soham from './assets/soham.jpg';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Testimonials() {
  const testimonials = [
    {
      content: '“The LUKSO Build UP! Hackathon was a success. We were so happy with the results and enjoyed working with the team!”',
      name: 'Jonathan W.',
      position: 'Growth Manager @ Lukso',
      logo: lukso,
      alt: 'lukso',
      avatar: jonathan
    },
    {
      content: '“Hosting hackathons with buidlbox has provided a global network of driven, independent builders that continue to thrive within our ecosystem. Hackathons are energizing, and they allow us to educate and empower builders.”',
      name: 'Kitti Borissza',
      position: ' Adoption and Community Catalyst @ Tezos',
      logo: tezos,
      alt: 'tezos',
      avatar: kitti
    },
    {
      content: `“Hosting a hackathon with the buidlbox team was one of the most productive outcomes we've seen in the tech ecosystem and crypto community”`,
      name: 'Ivan Kotelnikov',
      position: 'devrel @ everscale.network',
      logo: everscale,
      alt: 'everscale',
      avatar: ivan
    },
    {
      content: `“The ETHShanghai Hackathon was a positive experience with the support we got. Overall, it was a successful hackathon with 950 participants from 344 projects, which helped raise awareness our ecosystem.”`,
      name: 'Daphne Tan',
      position: 'Investment Manager @ Mask Network',
      logo: ethShanghai,
      alt: 'ethShanghai',
      avatar: daphne
    },
    {
      content: '“Our goal was to host a hackathon to kickstart the platform while driving high quality community growth. Partnering with buidlbox was a phenomenal experience - We at Reserve would highly recommend it!“',
      name: 'Soham Mishra',
      position: 'Business Development & Strategic Partnerships @ Reserve Protocol',
      logo: reserve,
      alt: 'Reserve Protocol',
      avatar: soham
    }
  ];

  testimonials.unshift(testimonials[testimonials.length - 1]);
  testimonials.push(testimonials[1]);

  const { width } = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.matchMedia("(max-width: 31.25rem)").matches ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
  };

  const goNextSlide = useCallback(() => {
      setActiveSlide(prev => prev + 1);
  }, []);

  const goPrevSlide = useCallback(() => {
      setActiveSlide(prev => prev - 1);
  }, []);

  const handleTransitionEnd = () => {
    if (activeSlide === 0) {
        setTransitionEnabled(false);
        setActiveSlide(testimonials.length - 2);
    } else if (activeSlide === testimonials.length - 1) {
        setTransitionEnabled(false);
        setActiveSlide(1);
    }
    if (activeSlide === 1 || activeSlide === testimonials.length - 2) {
      setTransitionEnabled(true);
    }
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if(touchDown === null) {
      return;
    };
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
        goNextSlide();
        setAutoPlay(false);
    }
    if (diff < -5) {
        goPrevSlide();
        setAutoPlay(false);
    }

    setTouchPosition(null);
  };

  const ref = useRef();
  const timeoutId = useRef();
  const isRefVisible = useIsVisible(ref);
  const [autoPlay, setAutoPlay] = useState(true);

  const changeStep = useCallback((index) => {
    if (!index) {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(goNextSlide, 200);
    } else {
      timeoutId.current && clearTimeout(timeoutId.current);
      setActiveSlide(index);
      setAutoPlay(false);
    };
  }, [goNextSlide]);
    

  useEffect(() => {
    let intervalId;
    if (isRefVisible && autoPlay) {
      intervalId = setInterval(() => {
        changeStep();
      }, 4000);
    } else {
      intervalId && clearInterval(intervalId);
    }

    return () => intervalId && clearInterval(intervalId);
  }, [isRefVisible, changeStep, autoPlay]);

  return (
    <div className="testimonials">
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        ref={ref}
        // 1.8rem= gap, 60vw = activeSlide width 
        style={{
          transform: `${!isMobile
            ? `translate(calc(-${activeSlide * 60}vw - 0.4rem - calc(${activeSlide} * 1.8rem) + 20vw))`
            : `translate(calc(-${activeSlide * 100}vw))`}`,
          transition: !transitionEnabled ? 'none' : 'all 0.3s ease-out',
        }}
        onTransitionEnd={() => handleTransitionEnd()}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={`
              carousel-item ${
                activeSlide === index && index !== 0 && index !== testimonials.length - 1
                ? 'carousel-item-active'
                : ''}`
            }
            key={`testimonial-${index}`}
          >
            <div>
              <img className="testimonial-logo" src={testimonial.logo} alt={testimonial.alt} />
              <p className='font-m testimonial-content'>{testimonial.content}</p>
            </div>
            <div className='testimonial-side'>
              <img src={testimonial.avatar} alt={testimonial.name} width='50' height='50' />
              <div>
                <p className='font-xxs'>{testimonial.name}</p>
                <p className='font-xxs'>{testimonial.position}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <DotsNavigation totalSteps={testimonials.length - 3} activeStepIndex={activeSlide - 1} changeStep={changeStep}/>
    </div>
  );
}

export default Testimonials;