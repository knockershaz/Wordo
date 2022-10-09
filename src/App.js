import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  let toggleMode=()=>
  {
    // if(mode==='light')
    // {
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      document.body.style.color='white'
      showAlert("Gray Dark mode enabled","success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white'
    //   document.body.style.color='black'
    //   showAlert("Light mode enabled","success")
    // }
  }
  let toggleMode1=()=>
  {
    // if(mode==='light')
    // {
      setMode('dark')
      document.body.style.backgroundColor='#4d003e'
      document.body.style.color='white'
      showAlert("Wine Dark mode enabled","success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white'
    //   document.body.style.color='black'
    //   showAlert("Light mode enabled","success")
    // }
  }
  let toggleMode2=()=>
  {
    // if(mode==='light')
    // {
      setMode('dark')
      document.body.style.backgroundColor='#560202'
      document.body.style.color='white'
      showAlert("Blood Dark mode enabled","success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white'
    //   document.body.style.color='black'
    //   showAlert("Light mode enabled","success")
    // }
  }
  let toggleMode3=()=>
  {
    // if(mode==='light')
    // {
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode enabled","success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white'
    //   document.body.style.color='black'
    //   showAlert("Light mode enabled","success")
    // }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
    <div className='container my-3' >
    {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading ='Enter the text below' mode={mode}/>}/>
        </Routes> */}
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading ='Enter the text below' mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
