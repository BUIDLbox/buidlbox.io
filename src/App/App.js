import './reset.css';
import './App.css';
import Hero from '../components/Hero/Hero';
import Roadmap from '../components/Roadmap/Roadmap';
import Header from '../components/Header/Header';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import SsBox from '../components/SsBox/SsBox';
import Team from '../components/Team/Team';
import HackInABox from '../components/HackInABox/HackInABox';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Started from '../components/Started/Started';
const descriptionBoxData = [
  {animation: 'empowering', title: "Let’s buidl a better future"},
  {animation: 'buidlbox', title: "What is buidlbox?"}
];
function App() {
  return (
    <>
    <Header />
    <Hero />
    {descriptionBoxData.map((item, index) => (
       <DescriptionBox key={item.animation} index={index} animation={item.animation} title={item.title} />
    ))}

    <HackInABox />
    <Started />
    {/* <SsBox /> */}
    
     <Roadmap />
     <Team />
     <Newsletter />
     <Footer />
    </>
  );
}

export default App;
