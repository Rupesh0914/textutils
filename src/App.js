import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
// import About from './components/AboutUs/About';

function App() {
  return (
    <>
    <Navbar title="Mitrex" about="AboutUsTest" />
    <TextForm heading="Enter the text to analyse below"/>
    {/* <About /> */}
    </>
  );
}

export default App;
 