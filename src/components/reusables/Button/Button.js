import './Button.css';

function Button({text, link, handleClick, small}) {
  return (
    <>
      {link ? (
        <a className={small ? 'primary-btn small' : 'primary-btn'} href={link}>{text}</a>
      ) : (
        <button onClick={handleClick} className="primary-btn">{text}</button>
      )}
    </>
  );
}

export default Button;