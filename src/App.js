import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import React, {useState} from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - Dark mode"
      showAlert('Dark mode has been enabled','Success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light mode"
      showAlert('Light mode has been enabled','Success')
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />
        <hr/>
        <hr/>
        <hr/>
        <About mode={mode} />
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />}>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
