import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import Alert from './components/Alert/Alert';
import About from './components/AboutUs/About';

function App() {
  const [mode, setMode] = useState('light'); // Dark Mode Enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF'; // Change this to the appropriate background color for light mode
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Mitrex" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* Define your routes using <Route> components */}
          <Route exact path="/" element={<TextForm />} />
          <Route exacty
           path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;