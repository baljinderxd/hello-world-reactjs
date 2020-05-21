import React, { Component } from 'react'

class RC extends Component {
    render() {
        console.log('Rc')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RC
