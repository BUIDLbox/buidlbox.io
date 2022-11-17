import './DescriptionBox.css';
import BuidlboxAnimation from './BuidlboxAnimation';
import EmpowerAnimation from './EmpowerAnimation';

function DescriptionBox({title, index, animation}) {
  return (
    <section className="description-box">
      <div className="description-content">
        <h2>{title}</h2>
        {index === 0 ? description1 : description2}
      </div>
      {animation === 'buidlbox' ? <BuidlboxAnimation /> : <EmpowerAnimation />}
    </section>
  );
}

const description1 = (
  <>
    <p><span className="bold-p">buidlbox’s</span> mission is to empower changemakers to thrive in the digital frontier...and to us, buidlers are changemakers. They are developers, artists, educators, designers, thought leaders, and so much more.</p>
    <p> To support our mission, we aim to generate new opportunities for buidlers to create and foster growth across ecosystems that are buidling the future of the internet.</p>
  </>
);

const description2 = (
  <>
    <p><span className="bold-p">buidlbox</span> is a hackathon platform that provides both buidlers and guidls with the necessary innovative tools to grow and buidl a better web.</p>
    <p>With buidlbox, <span className="bold-p">guidls</span> (or organizations) can create and manage hackathons with ease; and <b>buidlers</b> can develop valuable skills, grow their portfolio, and earn money through challenges.</p>
  </>
)

export default DescriptionBox;