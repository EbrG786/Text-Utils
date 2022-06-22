import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import React, {useState} from 'react';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - Dark mode"
      console.log(mode)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light mode"
      console.log(mode)
    }
  }

  return (
    <>
      <Navbar title="Text Utilz" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <div className="container my-3">
       <TextForm heading="Enter your text to analyze"/> 
      </div>
      <hr />
      <hr />
      <hr />
      <About/>
    </>
  );
}

export default App;
