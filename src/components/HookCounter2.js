import React,{useState} from 'react'

function HookCounter2() {
    const inicount=0
    const[count,setcount]=useState(inicount)
    const incFive=()=>{
        for (let i = 0; i < 5; i++) {
           setcount(prevCount=>prevCount+1)
            
        }
    }
    return (
        <div>
            Count: {count}
            <div>
            <button onClick={()=>setcount(inicount)}>Reset</button>
            <button onClick={()=>setcount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incFive}>Increment 5</button>
            </div>
           
        </div>
    )
}

export default HookCounter2
