

import React,{useState} from 'react'
import './Calculator.css'

export default function Calculator() {

    const [number1, setnumber1] = useState("0")
    const [number2, setnumber2] = useState("0");
    const [show, setshow] = useState(false)

    return (
        <div className="Calculator">
            <h1 >THIS IS CALULATOR</h1>
            <input type="number" onClick={()=>setshow(false)} onChange={(e)=>setnumber1(parseInt(e.target.value))} />
            <br/>
            <br/>
            <input type="number" onClick={()=>setshow(false)} onChange={(e)=>setnumber2(parseInt(e.target.value))} />
            <br/>
            <br/>
          <button  onClick={()=>setshow(!show)}>calculate</button>
           {show ?<div>
               <p>number={number1}   number={number2}</p>
            <p>ADD:{number1+number2}</p>
            <p>SUB:{number1-number2}</p>
            <p>MUL:{number1*number2}</p>
            <p>DIV:{Math.floor(number1/number2)}</p>
             </div>:null}
            
        </div>
    )
}
