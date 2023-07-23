import React, { useState} from 'react'

export default function TextForm (props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleUpLowerClick = () => {
        let newTextLower = text.toLowerCase()
        setText(newTextLower)
    }
    const handleOnChnage = (event) => {
        setText(event.target.value)
    }

    
    const [text, setText ] = useState('')

    return (  
        <>
         <div className='container'>
            <div className="mb-3">
               <h1>{props.heading}</h1>
                 <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="12"></textarea>
          </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-3' onClick={handleUpLowerClick}>Convert to LowerClick</button>
        </div>
            <div className='container my-3'>
               <h2>Your text summary</h2>
                <p>{text.split(" ").length} words,{text.length} character</p>
                <p>{0.008 * text.split(" ").length} Mins Read</p>
                <h2>{text}</h2>
        </div>
    </>
    )
}