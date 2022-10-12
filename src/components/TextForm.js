import React,{useState} from 'react'
import './TextForm.css'
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
        props.showAlert("Converted to uppercase","success")
    }
    const handleRemoveWhitespace=()=>
    {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed","success")
    }
    const handleCopy=()=>
    {
        var text =document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success")
    }
    const handleOnClickL=()=>{
        let newtext=Text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnClickClear=()=>{
        let newtext="";
        setText(newtext);
        props.showAlert("text cleared","success")
    }
    const handleOnClickExtractMail=()=>{
        let reg=/\w+@gmail.com/g;
        let ans=Text.match(reg);
        if(ans!=null)
        {
            let a= ans.toString();
            setText(a);
            document.getElementById('preview').innerHTML=`${ans.length} emails found`
            document.getElementById('preview').style.color='green';
            props.showAlert("email extracted","success")
        }
        else
        {
            props.showAlert("email not found ","warning")
        }
    }
    const handleOnClickExtractNumber=()=>{
        let regex=/[0-9]{10}/g;
        let ans2=Text.match(regex);
        let a2;
        if(ans2 != null)
        {
        a2= ans2.toString();
        setText(a2);
        document.getElementById('preview').innerHTML=`${ans2.length} Number found`
        document.getElementById('preview').style.color='green';
        props.showAlert("number extracted","success")
        }
        else
        {
            props.showAlert("number not found ","warning")
        }
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
        <div className='cont'>
        <button disabled={Text.length===0} className='btn btn-dark' onClick={handleOnClickU} >Convert to uppercase</button>
        <button disabled={Text.length===0} className='btn btn-dark mx-2  butto' onClick={handleOnClickL}>Convert to LowerCase</button>
        <button disabled={Text.length===0}className='btn btn-dark mx-2 butto' onClick={handleOnClickClear} >Clear text</button>
        <button disabled={Text.length===0}className='btn btn-dark mx-2 butto' onClick={handleCopy} >Copy text</button>
        <button disabled={Text.length===0}className='btn btn-dark mx-2 butto' onClick={handleRemoveWhitespace} >Remove WhiteSpace</button>
        {/* <button className='btn btn-warning mx-2 my-3' onClick={toggleMode}>{modeBtn}</button> */}
        <button disabled={Text.length===0}className='btn btn-dark mx-2 butto' onClick={handleOnClickExtractNumber} >Extract Number</button>
        <button disabled={Text.length===0}className='btn btn-dark mx-2 butto' onClick={handleOnClickExtractMail} >Extract email</button>
        </div>

    </div>
    <div className="container my-3">
        <h2>Your text summary : </h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview : </h2>
        <p id='preview'></p>
        <p>{Text.length>0?Text:"Nothing to p"}</p>
    </div>

    </>
  )
}
