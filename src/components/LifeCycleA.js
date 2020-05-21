import React, { Component } from 'react'
import LCB from './LCB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'baljinder'
        }
        console.log('LifecycleA const')
    }
    

static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getderivedstate from props')
    return null
}

componentDidMount(){
    console.log('LCA componentDidMount')
}

shouldComponentUpdate(){
    console.log('LCA render')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LCA getsnapshotbfore update')
    return null
}

componentDidUpdate(){
    console.log('LCA comonentdidupdate')
}

changeState=()=>{
    this.setState({
        name: 'Revolution'
    })
}

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LCA</div>
                <button onClick={this.changeState}>Change State</button>
                <LCB/>
            </div>
        )
    }
}

export default LifeCycleA
