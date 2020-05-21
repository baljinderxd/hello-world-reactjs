import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // this.chandler=this.chandler.bind(this)
    }

    // chandler() {
    //     this.setState({
    //         message: 'Bye'
    //     }
    //     )
    // }

    chandler=()=>{this.setState({
        message: 'bye'
    })}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.chandler.bind(this)}>click</button> */}
                {/* <button onClick={()=>this.chandler()}>click</button> */}
                <button onClick={this.chandler}>click</button>
            </div>
        )
    }
}

export default EventBind
