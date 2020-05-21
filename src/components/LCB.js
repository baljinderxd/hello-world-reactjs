import React, { Component } from 'react'

class LCB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'baljinder'
        }
        console.log('LCB const')
    }
    

static getDerivedStateFromProps(props,state){
    console.log('LCB getderivedstate from props')
    return null
}

componentDidMount(){
    console.log('LCB componentDidMount')
}

shouldComponentUpdate(){
    console.log('LCB render')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LCB getsnapshotbfore update')
    return null
}

componentDidUpdate(){
    console.log('LCB comonentdidupdate')
}
    render() {
        console.log('LCB render')
        return (
            <div>
                LCB
            </div>
        )
    }
}

export default LCB
