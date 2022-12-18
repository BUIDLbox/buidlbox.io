import './Button.css';
import btnBox1 from './btn-box-1.svg';
import btnBox2 from './btn-box-2.svg';
import btnBox3 from './btn-box-3.svg';
import btnBox4 from './btn-box-4.svg';

function Button({text, link, handleClick, small, hero}) {
  return (
    <>
      {link ? (
        <div className='link-container'>
          <a
            className={small ? 'primary-btn small' : hero ? 'primary-btn hero' : 'primary-btn'}
            href={link}
          ><span>{text}</span></a>
          {small === true && (
            <div className='btn-boxes'>
              <img className='btn-box-1' src={btnBox1} alt="" />
              <img className='btn-box-2' src={btnBox2} alt="" />
              <img className='btn-box-3' src={btnBox3} alt="" />
              <img className='btn-box-4' src={btnBox4} alt="" />
            </div>
          )}
        </div>
      ) : (
        <button onClick={handleClick} className="primary-btn">{text}</button>
      )}
    </>
  );
}

export default Button;