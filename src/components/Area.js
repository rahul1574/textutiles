import React,{useState}from 'react'

export default function Area() {
    const textupchange=()=>{
        let newtext=text.toUpperCase()
        settext(newtext)
    }
    const textlochange=()=>{
        let newtext=text.toLowerCase()
        settext(newtext)
    }
    const changetext=(event)=>{
        settext(event.target.value)
    }
    const clearall=(newtext)=>{
        newtext=" "
        settext(newtext)
    }
    const reversetext=()=>{
        const reversed=text.split("").reverse().join("");
        settext(reversed);
    }
    const copytext=async()=>{
        try{
        await navigator.clipboard.writeText(text);
            alert('text copied to clipboard');
        }
        catch(err){
            console.error('failed to copy text:',err);
        }
    };
    const [text,settext]=useState("")
  return (
    <div>
      <div className="mb-2">
            <label for="my-box" className="form-label"><h2>Put your text below</h2></label>
            <textarea placeholder="Enter text here..." className="form-control" value={text} onChange={changetext} id="my-box" rows="8" ></textarea>
        </div>
        <div className="container1">
        <button className="btn mx-1" onClick={textupchange}>change to upper case</button>
        <button className="btn mx-1" onClick={textlochange}>change to lower case</button>
        <button className="btn mx-1" onClick={clearall}>clear text</button>
        <button className="btn mx-1" onClick={reversetext}>Reverse text</button>
        <button className="btn mx-1" onClick={copytext}>copy text</button>
        </div>
        <h2 className='my-3'>Your text summary</h2>
        <p>Above text consists of {text.split(" ").length} words and {text.length} characters</p>
        <p>You can read this in {0.08*text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <input type="range"></input>
    </div>
  )
}
