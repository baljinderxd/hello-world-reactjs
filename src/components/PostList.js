import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             emsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error=> {
            console.log(error)
            this.setState({emsg:'Error retreving data'})
        })
    }
   
    render() {
        const {posts,emsg}=this.state
        return (
            <div>
                List Of Posts
                {
                    posts.length ? 
                posts.map(post=> <div key={post.id}>{post.id} {post.title}</div>) :
                null
                }
                {emsg ? <div>{emsg}</div> : null}
            </div>
        )
    }
}

export default PostList
