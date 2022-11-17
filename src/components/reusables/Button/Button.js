import './Button.css';

function Button({text, link}) {
  return (
    <>
      {link ? (
        <a className="primary-btn" href={link}>{text}</a>
      ) : (
        <button className="primary-btn">{text}</button>
      )}
    </>
  );
}

export default Button;