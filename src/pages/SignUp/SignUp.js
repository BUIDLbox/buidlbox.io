import SignUpForm from "../../components/reusables/SignUpForm/SignUpForm";
import './SignUp.css';
import Footer from '../../components/Footer/Footer';

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-page_form">
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;