import React , {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("");
  const handelUpClick = () =>{
        //console.log('Upper case was clicked'+text);
        let newText = text.toUpperCase();
        setText(newText);
  }
  const handelLowClick = () =>{
    //console.log('Upper case was clicked'+text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const clearText = () =>{
    //console.log('Upper case was clicked'+text);
    let newText = "";
    setText(newText);
  }
  const handelOnChange = (event) =>{
    //console.log('On change');
    setText(event.target.value);
  }
  const handelCopy = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handelLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy Text</button>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words & {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length } Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter Text here to Preview'}</p>
            </div>
            
            </div>
  )
}
