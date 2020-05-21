import React, { Component } from 'react'

class UserGreeting extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            islogedin: true
       }
   }
   
    render() {


return this.state.islogedin && <div>Welcome boi</div>

// return(
//     this.state.islogedin?
//     (<div>Welcome boi</div>
//         ):(
//     <div>Welcome guest</div>)
// )

// let msg
// if(this.state.islogedin){
//     msg= <div>Welcome boi</div>
// }
// else
// msg=<div>Welcome guest</div>

// return <div>{msg}</div>

        // if(this.state.islogedin){
        //     return(
        //         <div>Welcome boi</div>
        //     )
        // }
        // else
        // return(
        //     <div>Welcome guest</div>
        // )
        // return (
        //     <div>
        //   <div>     Hello bro</div>
        //   <div>Hello guest</div> 
        //     </div>
        // )
    }
}


export default UserGreeting
