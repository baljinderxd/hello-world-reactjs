import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments: '',
             topic: 'react'
        }
    }

    handler=(event)=>{
this.setState({
    username: event.target.value
})
    }

    handlecomchng=event=>{
        this.setState({
            comments:event.target.value
        })
    }
    hantop=event=>{
        this.setState({
            topic: event.target.value
        })
    }

handlesubmit=event=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}

    render() {
        const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.handlesubmit}>
            <div>
              <label>Username</label><br></br>
              <input 
              type="text" 
              value={username} 
              onChange={this.handler}/>
            </div>
            <div>
                <label>Components</label><br></br>
                <textarea 
                value={comments}
                onChange={this.handlecomchng}></textarea>
            </div>
            <div>
            <label>Topics</label><br></br>
            <select value={topic}
            onChange={this.hantop}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vues">Vue</option>
            </select>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default Form
