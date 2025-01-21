import React, { useState}  from 'react'


export default function Textform(props) {
const [text, setText] = useState("")

const handleupcase = () =>{
  let Newtext = text.toUpperCase();
  setText(Newtext);
  props.showAlert("Text change in Upper Case", "success")
}

const handlelowcase = () =>{
  let Newtext = text.toLowerCase();
  setText(Newtext);
  props.showAlert("Text change in Lower Case", "success")    
}

const handlesentencecase = () => {
  let Newtext = text
  .split(/([.!?]\s*)/)
  .map((sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
    })
    .join("");;
  setText(Newtext);
  props.showAlert("Text change in Sentence Case", "success")   
}

const handlecapitalizedcase = () => {
  let Newtext = text
  .split(" ")
  .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ");;
  setText(Newtext);
  props.showAlert("Text change in Sentence Case", "success")   
}

const handletitlecase = () => {
  let Newtext = text
  .split(" ")
  .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ");
  setText(Newtext);
  props.showAlert("Text change in Title Case", "success")   
}

const handleinversecase = () => {
  let Newtext = text
  .split("")
  .map((character) => {
   return  character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    })
    .join("");
  setText(Newtext);
  props.showAlert("Text change in Inverse Case", "success")   
}

const handlealtercase = () => {
  let Newtext = text
  .split("")
  .map((char , index) => {
    return index % 2 === 0 ?  char.toUpperCase() : char.toLowerCase();
  })
  .join("");
 
  setText(Newtext);
  props.showAlert("Text change in Alternate Case", "success")   
}

const handlecopy = () => {
  let Newtext = document.getElementById('textutils');
  Newtext.select();
  navigator.clipboard.writeText(Newtext.value);
  props.showAlert("Text Copy to Clipboard", "success")   
}

const removeextraspace = () => {
  let Newtext = text.trim().split(/[ ]+/)
  //console.log(Newtext);
  setText(Newtext.join(" "));
  props.showAlert("Remove Extra Space", "success")   
}
const handleclearcase = () =>{
  let Newtext = '';
  setText(Newtext);
  props.showAlert("Clear Textxv     ", "success")   
}

const handleonchange = (event) => {
 setText(event.target.value);
}
  return (   
<div className="container">
  <h2 className={`my-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h2>
<div className="mb-3">
   <textarea className="textutils" value={text} onChange={handleonchange} style={{ color: props.mode === 'dark' ? "white" : "#333", backgroundColor: props.mode === 'dark'? "#666363" : "#efefef", width: "100%" , padding: "10px",
    border: props.mode === 'dark'? "2px solid#efefef" : "2px solid#444",
    borderRadius: "8px 4px 8px 4px",
     }} id="textutils" rows="6"></textarea>
</div>
<div className="mb-3">
<button disabled={text === ""} type="button" onClick={handlesentencecase} className="btn btn-primary mx-2 my-2">Sentence Case</button>
<button disabled={text.length === 0} type="button" onClick={handleupcase} className="btn btn-primary mx-2 my-2">Upper Case</button>
<button disabled={text === ""} type="button" onClick={handlelowcase} className="btn btn-primary mx-2 my-2">Lower Case</button>
<button disabled={text === ""} type="button" onClick={handlecapitalizedcase} className="btn btn-primary mx-2 my-2">Capitalized Case</button>
<button disabled={text.length === 0} type="button" onClick={handletitlecase} className="btn btn-primary mx-2 my-2">Title Case</button>
<button disabled={text.length === 0} type="button" onClick={handleinversecase} className="btn btn-primary mx-2 my-2">InVeRsE CaSe</button>
<button disabled={text.length === 0} type="button" onClick={handlealtercase} className="btn btn-primary mx-2 my-2">aLtErNaTiNg cAsE</button>
<button disabled={text === ""} type="button" onClick={handlecopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
<button disabled={text === ""} type="button" onClick={removeextraspace} className="btn btn-primary mx-2 my-2">Remove Extra Space</button>
<button disabled={text === ""} type="button" onClick={handleclearcase} className="btn btn-primary mx-2 my-2">Clear</button> 
</div>
{/*

<button type="button" onClick={handledownloadcase} className="btn btn-primary mx-2 my-2">Download Text</button>
<button type="button" onClick={handleclipboardcase} className="btn btn-primary mx-2 my-2">Copy to Clipboard</button>*/}

<div className='container'>
<p style={{color: props.mode === 'dark' ? "white" : "#333"}}>Character Count:{text.length} | Word Count: {text === "" ? "0" : text.trim().split(/\s+/).length} | Sentence Count:{text==="" ? "0" : text.trim().match(/[^.!?]+[.!?]+|[^.!?]+$/g).length} | Line Count: {text === "" ? "0" : text.split(/\r\n|\r|\n/).length} </p>
</div>
<div className='container'>
  <h2 style={{color: props.mode === 'dark' ? "white" : "#333"}}>Preview</h2>
  <p style={{color: props.mode === 'dark' ? "white" : "#333"}}>{text.length > 0 ? text : "Nothing to Preview....."}</p>
</div>
</div>   
 )
}
