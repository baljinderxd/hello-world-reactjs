import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRefs=React.createRef()
    this.cbRef=null;
    this.setcbRef=(element)=>{
        this.cbRef=element
    }
    }
    
   componentDidMount(){
    if(this.cbRef){
        this.cbRef.focus()
    }
    //    this.inputRefs.current.focus()
    //    console.log(this.inputRefs)
   }
   clicked=()=>{
alert(this.inputRefs.current.value)
   }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefs}></input>
                <input type="text" ref={this.setcbRef}></input>
                <button onClick={this.clicked}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
