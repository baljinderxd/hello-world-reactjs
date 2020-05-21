import React, { useState } from 'react'

function HooksCounter() {
    const [count, setCount] = useState([])
   
    return (
        <div>
            <button onClick={()=> setCount([ ... count, {
        id: count.length,
        value: Math.floor(Math.random() * 10) + 1
    }

    ]

    )}>Add new number</button>
            <ul>
               {
               count.map( item=>(
               <li key={item.id}>{item.id}: {item.value}</li>))}
            </ul>
        </div>
    )
}

export default HooksCounter
