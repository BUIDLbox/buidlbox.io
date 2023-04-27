import "./Button.css";
import btnBox1 from "./btn-box-1.svg";
import btnBox2 from "./btn-box-2.svg";
import btnBox3 from "./btn-box-3.svg";
import btnBox4 from "./btn-box-4.svg";

function Button({ text, link, handleClick, small, hero, first, withBoxes, newTab }) {
  const getClasses = `
    primary-btn ${small ? "small" : ""}
    ${hero ? "hero" : ""}
    ${first ? "first" : ""}
  `;
  return (
    <>
      {link ? (
        <div className={`link-container ${first ? 'first' : ''}`}>
          { newTab ? (
          <a className={getClasses} href={link} target="_blank" rel="noreferrer">
            <span>{text}</span>
          </a>
          ) : (
          <a className={getClasses} href={link}>
            <span>{text}</span>
          </a>
           )}
          {withBoxes === true && (
            <div className="btn-boxes">
              <img className="btn-box-1" src={btnBox1} alt="" />
              <img className="btn-box-2" src={btnBox2} alt="" />
              <img className="btn-box-3" src={btnBox3} alt="" />
              <img className="btn-box-4" src={btnBox4} alt="" />
            </div>
          )}
        </div>
      ) : (
        <button onClick={handleClick} className="primary-btn">
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
