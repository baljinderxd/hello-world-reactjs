import React from 'react'

// function Frinput() {
//     return (
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }

const Frinput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}
)
export default Frinput
