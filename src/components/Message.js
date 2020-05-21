import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome boi'
        }
    }
    changemsg() {
        this.setState({
            message: 'Shukriya'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemsg()}>Sabskribe</button>
            </div>
        )
    }
}
export default Message;