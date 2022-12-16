import { useState } from "react";
import Button from "../reusables/Button/Button";
import DividerLottie from "./DividerLottie";
import Modal from "./Modal/Modal";
import './Newsletter.css';

function Newsletter() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DividerLottie />
      <section className="newsletter">
        <h2>Interested? Join our newsletter</h2>
        <Button text="Sign up" handleClick={() => setShowModal(true)} />
      </section>
      <Modal show={showModal} setShow={setShowModal} />
    </>
  );
}

export default Newsletter;