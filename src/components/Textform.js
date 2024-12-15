import React, {useState} from 'react'

export default function Textform(props) {

  const [text , setText] = useState(''); //state 1

  const handleUpClick = ()=>{
    //console.log('Uppercase was Clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLClick = ()=>{
    //console.log('Uppercase was Clicked'+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };


  const handleOnChange = (event)=>{
    //console.log('handle on change.');
    setText(event.target.value);
  };
  
  const removeExtraSpaces = (input) => {
    return input.replace(/\s+/g, " ").trim();
  };

  // Handle button click to remove extra spaces
  const handleRClick = () => {
    setText(removeExtraSpaces(text));
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleDownloadClick = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "download.txt"; // File name
    link.click();
    URL.revokeObjectURL(link.href); // Clean up memory
  };

  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRClick}>Remove extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleDownloadClick}>Download Text</button>
    </div>
    <div className="container" my-3>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read.</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
    
  )
}
