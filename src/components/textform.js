import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
     props.showAlert("converted to lowercase","success");

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
     props.showAlert("Text cleared","success");

    }

    const handleChange = (event) => {
       setText(event.target.value);
       }

    const [text, setText] = useState('');

    const handleCopy = () => {
        var text = document.getElementById("form");
        text.select();
        navigator.clipboard.writeText(text.value);
     props.showAlert("Text copy to clipboard","success");
        
    }
    
    const  RemExtraSpace = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
     props.showAlert(" ExtraSpaces Removed Successfully","success");

      }

    return (
        <>    
    <div className="container" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} onChange={handleChange}   style={{background: props.mode=== 'dark' ? 'grey' : 'white',color: props.mode=== 'dark' ? 'white' : 'black'}}  id="form" rows="8"></textarea>
    </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 text-white" onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn btn-danger mx-1 " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 text-white" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={RemExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className='mt-3'style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>Your Paragraph has <span className="words"><b>{text.split(" ").length}</b></span>   Words and <span className='char' ><b>{text.length}</b></span>  Characters.</p>
        <p>Time Required for Learning: <b> <span className='time'>{0.008 * text.split(" ").length}</span></b></p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to Preview if here"}</p>
    </div>
        </>
    

  )
}
