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
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor="white";
    }
    
  }
  return (
    <>
      <Navbar title="EaseText" abouttext="About" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
      <Textform heading="Enter the text here to analyze" mode={mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
