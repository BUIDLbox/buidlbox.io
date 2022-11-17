import './Team.css';
import morten from './morten.jpg';
import morten2x from './morten-2x.jpg';
import james from './james.jpg';
import james2x from './james-2x.jpg';
import annelisa from './annelisa.jpg';
import annelisa2x from './annelisa-2x.jpg';
import blerta from './blerta.jpg';
import blerta2x from './blerta-2x.jpg';
import mani from './mani.png';
import mani2x from './mani-2x.png';
import gloria from './gloria.jpg';
import gloria2x from './gloria-2x.jpg';
import guist from './guist.jpg';
import guist2x from './guist-2x.jpg';


function Team() {
  const team = [
    {name: 'Morten', src: [morten, morten2x], twitter: '', bg: 'var(--gradient-3)'},
    {name: 'James', src: [james, james2x], twitter: '', bg: 'var(--gradient-1)'},
    {name: 'Annelisa', src: [annelisa, annelisa2x], twitter: '', bg: 'var(--gradient-2)'},
    {name: 'Blerta', src: [blerta, blerta2x], twitter: '', bg: 'var(--gradient-2)'},
    {name: 'Mani', src: [mani, mani2x], twitter: '', bg: 'var(--gradient-3)'},
    {name: 'Gloria', src: [gloria, gloria2x], twitter: '', bg: 'var(--gradient-1)'},
    {name: 'Guist', src: [guist, guist2x], twitter: '', bg: 'var(--gradient-2)'},
  ];

  return (
    <section className="team">
      <h2>Team</h2>
      <div className="team-members">
        {team.map(member => (
          <div className="member-card" key={member.name}>
            <picture>
              <source
                srcSet={`${member.src[0]} 1x,
                ${member.src[1]} 2x,`}
                width='152' height='151'
              />
              <img className="member-avatar" src={member.src[0]} width='152' height='151' alt={member.name} />
            </picture>
            <div className="member-name" style={{background: member.bg}}>
              <p>{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;