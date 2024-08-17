import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PhoneInput from './components/PhoneInput';
import ConfirmationPage from './components/ConfirmationPage';
import IpRequest from './components/IpRequest';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PhoneInput />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path='/ip-request' element={<IpRequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
