import React, { Component,PureComponent } from 'react'
import PC from './PC';
import RC from './RC';
import MC from './MC';

export class ParC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'bal'
        }
    }
    componentDidMount(){
        setInterval(() => {   
            this.setState({
                name: 'bal'
            })
        }, 2000);
    }
    
    render() {
        console.log('ParComp')
        return (
            <div>
                Parent component
               <MC name={this.state.name}/>
            </div>
        )
    }
}

export default ParC
