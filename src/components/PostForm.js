import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: '',
            title: '',
            body: ''
        }
    }

    changeHandle=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

submithandle=e=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=> {
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch(error=> {
        console.log(error)
    })
}

    render() {
        const { userID, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submithandle}>
                    <div>
                        <input type="text" name="userID" value={userID} onChange={this.changeHandle}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandle}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandle}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
