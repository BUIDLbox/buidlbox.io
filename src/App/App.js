import './reset.css';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Redirect from '../pages/Redirect';
import SignUp from '../pages/SignUp/SignUp';

function App () {
  const terms = 'https://buidlbox-app-resources.s3.amazonaws.com/buidlbox_ToS.pdf';
  const privacy = 'https://buidlbox-app-resources.s3.amazonaws.com/buidlbox_Privacy_Policy.pdf';

  return (
    <Routes>
      <Route
        path='/terms'
        element={<Redirect path={terms} />}
      />
      <Route
        path='/privacy'
        element={<Redirect path={privacy} />}
      />
      <Route
        path='/sign-up'
        element={<SignUp />}
      />
      <Route path='/' element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
