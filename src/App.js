import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  let toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      document.body.style.color='white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3' >
    {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading ='Enter the text below' mode={mode}/>}/>
        </Routes> */}
        <TextForm heading ='Enter the text below' mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
