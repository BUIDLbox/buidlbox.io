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
import { Parallax } from 'react-scroll-parallax';

function Team() {
  const team = [
    {name: 'Morten', src: [morten, morten2x], twitter: 'https://twitter.com/Death_and_TXs', bg: 'var(--gradient-3)'},
    {name: 'James', src: [james, james2x], twitter: 'https://twitter.com/Just_Jim_Jam', bg: 'var(--gradient-1)'},
    {name: 'Annelisa', src: [annelisa, annelisa2x], twitter: 'https://twitter.com/notannelisa', bg: 'var(--gradient-2)'},
    {name: 'Blerta', src: [blerta, blerta2x], twitter: 'https://twitter.com/AvaleBlerta', bg: 'var(--gradient-2)'},
    {name: 'Mani', src: [mani, mani2x], twitter: 'https://twitter.com/clumsy_ninjja', bg: 'var(--gradient-3)'},
    {name: 'Gloria', src: [gloria, gloria2x], twitter: 'https://twitter.com/gkimbwala', bg: 'var(--gradient-1)'},
    {name: 'Guist', src: [guist, guist2x], twitter: 'https://twitter.com/g_uist', bg: 'var(--gradient-2)'},
  ];

  return (
    <section className="team">
      <Parallax speed={5} opacity={[0.3, 1]}>
        <h2>Team</h2>
      </Parallax>
      <div className="team-members">
        {team.map(member => (
          <a href={member.twitter} className="member-card" key={member.name}>
            <picture>
              <source
                srcSet={`${member.src[0]} 1x,
                ${member.src[1]} 2x,`}
                width='152' height='151'
              />
              <img className="member-avatar" src={member.src[0]} width='152' height='151' alt={member.name} />
            </picture>
            <div className="member-name">
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9889 1.90635C19.2556 2.22965 18.4667 2.45262 17.6333 2.55295C18.4778 2.05128 19.1333 1.23746 19.4444 0.289855C18.6556 0.758083 17.7778 1.10368 16.8333 1.28205C16.0889 0.490524 15.0222 0 13.8444 0C11.5778 0 9.74444 1.82832 9.74444 4.08027C9.74444 4.40357 9.77778 4.70457 9.85556 5.01672C6.44444 4.8495 3.42222 3.22185 1.4 0.746934C1.04444 1.34894 0.844444 2.05128 0.844444 2.79822C0.844444 4.21405 1.56667 5.46265 2.66667 6.19844C1.98889 6.17614 1.35556 5.98662 0.811111 5.68562V5.73021C0.811111 7.7146 2.22222 9.3534 4.1 9.73244C3.75556 9.82163 3.4 9.87737 3.02222 9.87737C2.75556 9.87737 2.5 9.84392 2.24444 9.79933C2.76667 11.4158 4.27778 12.5975 6.07778 12.631C4.67778 13.7235 2.9 14.3813 0.977778 14.3813C0.644444 14.3813 0.322222 14.359 0 14.3255C1.82222 15.485 3.97778 16.1538 6.28889 16.1538C13.8333 16.1538 17.9667 9.93311 17.9667 4.53735C17.9667 4.35897 17.9667 4.1806 17.9556 4.01338C18.7667 3.44482 19.4556 2.72018 20 1.89521" fill="currentColor"/>
              </svg>
              <p>{member.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Team;