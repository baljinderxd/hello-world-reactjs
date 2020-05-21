import React from 'react'

const Greet = props => {
    const{name,hname}=props
    return (
        <div>
            <h1>Hello {name} aka {hname}</h1>
            
        </div>
    )
}

export default Greet;