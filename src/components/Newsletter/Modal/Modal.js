import { CSSTransition } from 'react-transition-group';
import SignUpForm from '../../reusables/SignUpForm/SignUpForm';
import './Modal.css';

function Modal({show, setShow}) {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300}}
    >
      <div className="modal" onClick={() => setShow(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <SignUpForm />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;