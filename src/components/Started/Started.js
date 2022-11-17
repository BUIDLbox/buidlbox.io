import './Started.css';

function Started() {
  const numbersData = [
    {number: '50k', description: 'participants'},
    {number: '250+', description: 'event sponsors'},
    {number: '130+', description: 'hackathons'},
    {number: '16k', description: 'projects created'},
  ];

  return (
    <section className="started">
      <div>
        <h2>Where it all started</h2>
        <p>Since 2017, our team has organized and launched hundreds of virtual and in-person hackathons on the Gitcoin platform. With our knowledge and expertise, we know what it takes to help ecosystems grow. That’s why we’ve created buidlbox.</p>
      </div>
      <div className="numbers">
        {numbersData.map((item) => (
          <div key={item.description} className="number-card">
            <p className="number">{item.number}</p>
            <p className="font-s">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Started;