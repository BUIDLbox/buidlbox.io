import Button from "../reusables/Button/Button";
import deco from './deco.svg';
import './Newsletter.css';

function Newsletter() {
  return (
    <>
      <section>
        <img className="deco-img" src={deco} alt=""  width="910" height="50" />
      </section>
      <section className="newsletter">
        <h2>Interested? Join our newsletter</h2>
        <Button text="Sign up" />
      </section>
    </>
  );
}

export default Newsletter;