import React, { Component } from 'react'
import Frinput from './Frinput'

class Frparentinput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    clickeddd=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <Frinput ref={this.inputRef}/>
                <button onClick={this.clickeddd}>Focus Input</button>
            </div>
        )
    }
}

export default Frparentinput
