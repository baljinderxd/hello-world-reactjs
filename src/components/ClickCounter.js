import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const {count,countHandler}=this.props
        return (
            <div>
                <button onClick={countHandler}>{this.props.name} Clicked {count} Times</button> 
            </div>
        )
    }
}

export default withCounter(ClickCounter,2)
