import { Parallax } from 'react-scroll-parallax';
import './DescriptionBox.css';

function DescriptionBox({title, description, children, reversed}) {
  return (
    <div className={`description-box ${reversed? 'reversed' : ''}`}>
      {reversed ? (
        <>
          {children}
          <div className="description-content reversed">
            <h2 className="font-m">{title}</h2>
            {description}
          </div>
        </>
      ) : (
        <>
          <div className="description-content">
            <Parallax speed={5} opacity={[0.3, 1]}>
              <h2>{title}</h2>
            </Parallax>
            {description}
          </div>
          {children}
        </>
      )}
    </div>
  );
}

export default DescriptionBox;