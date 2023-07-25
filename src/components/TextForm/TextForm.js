import React, { useState} from 'react'

export default function TextForm (props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleUpLowerClick = () => {
        let newTextLower = text.toLowerCase()
        setText(newTextLower)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleUpClearText = () => {
        let newClearText = ""
        setText(newClearText)
        props.showAlert("Text cleared", "success")
    }
    const handleOnChnage = (event) => {
        setText(event.target.value)
    }
    const handleUpCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed!", "success")
    }
    const [text, setText ] = useState('')

    return (  
        <>
         <div className='container' style={{backgroundColor: props.mode === 'dark'? 'white' : '#042743', color:  props.mode === 'dark'? 'black' : 'white'}}>
            <div className="mb-3">
               <h1 >{props.heading}</h1>
                 <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode === 'dark'? 'white' : 'grey', color: props.mode === 'dark'? 'white' : 'grey'}} id="myBox" rows="12"></textarea>
          </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-3' onClick={handleUpLowerClick}>Convert to LowerClick</button>
        <button className='btn btn-primary mx-2 my-3' onClick={handleUpClearText}>Clear List</button>
        <button className='btn btn-primary mx-2 my-3' onClick={handleUpCopy}>Copy text</button>
        <button className='btn btn-primary mx-2 my-3' onClick={handleExtraSpace}>Remove Extra Spacer</button>
        </div>
            <div className='container my-3' style={{backgroundColor: props.mode === 'dark'? 'white' : '#042743', color:  props.mode === 'dark'? 'black' : 'white'}}>
               <h2>Your text summary</h2>
                <p>{text.split(" ").length} words,{text.length} character</p>
                <p>{0.008 * text.split(" ").length} Mins Read</p>
                <h2>{text.length> 0 ? text : 'Enter something in the textBox ablove to preview'}</h2>
        </div>
    </>
    )
}