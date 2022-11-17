import './DotsNavigation.css';
import uuid from 'react-uuid';

function DotsNavigation({ totalSteps, activeStepIndex, changeStep }) {
  const totalStepsArr = Array(totalSteps + 1).fill('');
  return (
    <div className="steps-container">
      {totalStepsArr.map((step, index) => (
        <div
          key={uuid()}
          onClick={() => changeStep(index)}
          className={`step-box ${activeStepIndex === index ? 'active-step-box' : ''}`}
          style={{ backgroundColor: activeStepIndex === index ? 'var(--main-light-color)' : 'unset' }}
        ></div>
      ))}
    </div>
  );
}

export default DotsNavigation;