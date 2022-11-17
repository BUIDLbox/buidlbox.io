import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import './SwitchImg.css';

function SwitchImg({selectedImg, setSelectedImg}) {
  // const images = [{ src: img1, index: 0}, { src: img2, index: 1}, { src: img3, index: 2},]
  return (
    <div>
      <div className="switch-img-container">
        <div className={selectedImg === 0 ? 'center' : ''}><img onClick={() => setSelectedImg(0)} className={selectedImg === 0 ? 'move-to-selected' : selectedImg === 1 ? 'move-to-back-back' : 'move-to-back'} src={img1} alt="Launch your own hackathon" /></div>
        <div className={selectedImg === 1 ? 'center' : ''}><img onClick={() => setSelectedImg(1)} className={selectedImg === 0 ? 'move-to-back' : selectedImg === 1 ? 'move-to-selected' : 'move-to-back-back'} src={img2} alt="Customize the experience" /></div>
        <div className={selectedImg === 2 ? 'center' : ''}><img onClick={() => setSelectedImg(2)} className={selectedImg === 0 ? 'move-to-back-back' : selectedImg === 2 ? 'move-to-selected' : 'move-to-back'} src={img3} alt="Gain valuable insights" /></div>
      </div>
    </div>
  );
}

export default SwitchImg;