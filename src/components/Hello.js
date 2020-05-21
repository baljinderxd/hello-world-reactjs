import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //     <h1>hello nalle</h1>
    // </div>
    // )
    return React.createElement('div', 
    {id: 'a',className:'bi'}, React.createElement('h1', null, 'hello nallo'))
}

export default Hello