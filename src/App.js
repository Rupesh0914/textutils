import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import Alert from './components/Alert/Alert';
// import About from './components/AboutUs/About';

function App() {
  const [mode, setMode] = useState('light'); // Dark Mode Enabled or no
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(() => {
        setAlert(null)
       }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode anable", "success");
    }
  else {
    setMode ('light');
    document.body.style.backgroundColor = '#042743'; 
    showAlert("Light mode anable", "success")
  }
}
  return (
    <>
    <Navbar title="Mitrex" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
    {/* <About /> */}
    </>
  );
}

export default App;
 