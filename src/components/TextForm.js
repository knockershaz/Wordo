import React,{useState} from 'react'
export default function TextForm(props) {

    // const [Mode, setMode] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    const [Text, setText] = useState('')
    // const [modeBtn, setmodeBtn] = useState("Enable Dark Mode")

    const handleOnClickU=()=>{
        let newtext=Text.toUpperCase();
        setText(newtext);
    }
    const handleRemoveWhitespace=()=>
    {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy=()=>
    {
        var text =document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleOnClickL=()=>{
        let newtext=Text.toLowerCase();
        setText(newtext);
    }
    const handleOnClickClear=()=>{
        let newtext="";
        setText(newtext);
    }
    const handleOnClickExtractMail=()=>{
        let reg=/\w+@gmail.com/g;
        let ans=Text.match(reg);
        let a= ans.toString();
        setText(a);
        document.getElementById('preview').innerHTML=`${ans.length} emails found`
        document.getElementById('preview').style.color='green';
    }
    const handleOnClickExtractNumber=()=>{
        let regex=/[0-9]{10}/g;
        let ans2=Text.match(regex);
        let a2= ans2.toString();
        setText(a2);
        document.getElementById('preview').innerHTML=`${ans2.length} Number found`
        document.getElementById('preview').style.color='green';
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    // let toggleMode=()=>{
    //         if(Mode.backgroundColor==='white'){
    //         setMode({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setmodeBtn("Enable Light Mode")
    //     }
    //     else{
    //         setMode({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setmodeBtn("Enable Dark Mode");
    //     }
    // }
  return (
    <>
    <div className='container' >
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here' style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black',resize:'none'}}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleOnClickU}>Convert to uppercase</button>
        <button className='btn btn-danger mx-2' onClick={handleOnClickL}>Convert to LowerCase</button>
        <button className='btn btn-warning mx-2' onClick={handleOnClickClear}>Clear text</button>
        <button className='btn btn-success mx-2' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-info mx-2' onClick={handleRemoveWhitespace}>Remove WhiteSpace</button>
        {/* <button className='btn btn-warning mx-2 my-3' onClick={toggleMode}>{modeBtn}</button> */}
        <button className='btn btn-danger mx-2' onClick={handleOnClickExtractNumber}>Extract Number</button>
        <button className='btn btn-dark mx-2' onClick={handleOnClickExtractMail}>Extract email</button>

    </div>
    <div className="container my-3">
        <h2>Your text summary : </h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} minutes to read</p>
        <h2>Preview : </h2>
        <p id='preview'></p>
        <p>{Text.length>0?Text:"Enter text above to preview here"}</p>
    </div>

    </>
  )
}
