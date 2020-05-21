import React, { Component } from 'react'

class CClick extends Component {
    chandler(){
        console.log('Class click')
    }
    render() {
        return (
         
              <button onClick={this.chandler}>Click Me</button>  
            
        )
    }
}

export default CClick
