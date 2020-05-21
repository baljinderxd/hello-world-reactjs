import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({ count: this.state.count + 1 },()=>{console.log('inside',this.state.count)})
        this.setState((prevstate, props) => ({
            count: prevstate.count + 1
        }))
        console.log('outside', this.state.count)
    }

    incrementfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div> count - {this.state.count} </div>
                <button onClick={() => this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
