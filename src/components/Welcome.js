import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        const {name,hname}= this.props
       // const{s1,s2}=this.state
    return ( 
    <div>
    <h1>Welcome {name} aka {hname}</h1>

   </div>
    )}
}
export default Welcome;