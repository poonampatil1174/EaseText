import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import React,{useState} from 'react';
import Alert from "./component/Alert";

function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 const togglemode=()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("The Dark mode has been enabled","success");
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("The Light mode has been enabled","success");
    }
    
  }
  return (
    <>
      <Navbar title="EaseText" abouttext="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} heading="Enter the text here to analyze" mode={mode}/>
      <About/>
      
    </>
  );
}

export default App;
