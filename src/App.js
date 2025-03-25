import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import React,{useState} from 'react';

function App() {
  const[mode, setMode] = useState('light');
 const togglemode=()=>
  {
    if(mode === 'light')
    {
      setMode('dark')
    }
    else 
    {
      setMode('light')
    }
    
  }
  return (
    <>
      <Navbar title="EaseText" abouttext="About" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
      <Textform heading="Enter the text here to analyze"/>
      <About/>
      </div>
    </>
  );
}

export default App;
