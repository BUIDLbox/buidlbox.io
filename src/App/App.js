import './reset.css';
import './App.css';
import Hero from '../components/Hero/Hero';
import Roadmap from '../components/Roadmap/Roadmap';
import Header from '../components/Header/Header';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Team from '../components/Team/Team';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Started from '../components/Started/Started';
import Testimonials from '../components/Testimonials/Testimonials';
import gsap from "gsap";
import EmpowerAnimation from '../components/DescriptionBox/EmpowerAnimation';
import ScrollTrigger from "gsap/ScrollTrigger";
import Logos from '../components/Logos/Logos';
import CustomLottie from '../components/DescriptionBox/CustomLottie';
import CollabLottie from '../components/DescriptionBox/CollabLottie';
import MetricsLottie from '../components/DescriptionBox/MetricsLottie';
import WhatIsBuidlbox from '../components/WhatIsBuidlbox/WhatIsBuidlbox';
import { ParallaxProvider } from 'react-scroll-parallax';
import Grow from '../components/Grow/Grow';
gsap.registerPlugin(ScrollTrigger);

const empowerDescription = (
  <>
    <p><span className="bold-p">buidlbox’s</span> mission is to empower changemakers to thrive in the digital frontier...and to us, buidlers are changemakers. They are developers, artists, educators, designers, thought leaders, and so much more.</p>
    <p> To support our mission, we aim to generate new opportunities for buidlers to create and foster growth across ecosystems that are buidling the future of the internet.</p>
  </>
);

const hackathonDescription = (
  <p>Design your hackathon experience with custom landing pages, custom user polls, set your challenges – the possibilities are endless!</p>
);

const metricsDescription = (
  <p>Gain insights to your hackathon’s performance analytics. Track user sign-ups, landing page performance, project submissions, and more.</p>
);

const collabDescription = (
  <p>Send invites for co-sponsors to collaborate and post challenges, or invite individuals to help judge your hackathon’s projects.</p>
);

const descriptionBoxes = [
  {
    title: 'Customize your hackathon',
    description: hackathonDescription,
    reversed: true,
    children: <CustomLottie />
  },
  {
    title: 'Track your metrics',
    description: metricsDescription,
    reversed: true,
    children: <MetricsLottie />
  },
  {
    title: 'Collaboration tools',
    description: collabDescription,
    reversed: true,
    children: <CollabLottie />
  },
];

function App() {

  return (
    <ParallaxProvider>
      <div>
        <Header />
        <Hero />
        <DescriptionBox title={`Let’s buidl a better future`} description={empowerDescription}>
          <EmpowerAnimation />
        </DescriptionBox>
        <WhatIsBuidlbox />
        <Grow />
        {descriptionBoxes.map((box, index) => (
          <DescriptionBox key={`box-${index}`} title={box.title} description={box.description} reversed={box.reversed}>
            {box.children}
          </DescriptionBox>
        ))}
        <Started />
        <Logos />
        <Testimonials />
        <Roadmap />
        <Team />
        <Newsletter />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
