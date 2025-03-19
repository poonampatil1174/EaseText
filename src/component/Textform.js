import React, { useState } from 'react';


function Textform(props) {
    const handleupperClick=()=>
    {
        // console.log("the uppercase was clicked");
        let up=text.toUpperCase();
        setText(up);
    }
    const handlelowerClick=()=>
     {
        // console.log("the lowercase was clicked");
        let up=text.toLowerCase();
        setText(up);
    }
     const handleclearClick=()=>
     {
        console.log("the clear text was clicked");
        let up='';
        setText(up);
    }


    // speak
    const speak = () => 
    {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    //copy
    const handlecopy=()=>
    {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    //remove extra spaces
    const handleextraspace=()=>
    {
        let newtext=text.split(/\s+/);
        setText(newtext.join(" ")); 
    }

    const handleOnChange=(event)=>
        {
            console.log("the uppercase was clicked");
            setText(event.target.value);
        }
    const [text, setText] = useState('');

    return (
       <>
       <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleupperClick} >convert to uppercase</button>
            <button className="btn btn-success mx-2" onClick={handlelowerClick} >convert to uppercase</button>
            <button className="btn btn-success mx-2" onClick={handlecopy} >copy text</button>
            <button className="btn btn-success mx-2" onClick={handleextraspace} >remove space</button>
            <button className="btn btn-success mx-2 my-2" onClick={speak} >Speak</button>
            <button className="btn btn-success mx-2" onClick={handleclearClick} >Clear</button>
            
           
          </div>
        <div class="container my-3">
            <h2>your text summury</h2>
            <p>{text.split(" ").length} words and {text.length} charaters</p>
            <p>{0.008 * text.split(" ").length} it will take minuts read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

export default Textform;
