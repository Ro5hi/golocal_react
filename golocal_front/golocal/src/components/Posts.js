import React from "react";
import PostCard from './PostCard.js'


    export default class Posts extends React.component { 
        state = {
            posts: []
        }

        componentDidMount() {
            fetch(`http://localhost:3001/api/v1/post`)
            .then(response => response.json())
            .then(posts => {
                this.setState({posts: posts.data})
                console.log(posts)
            });
        }
        render(){
            return
            <PostCard>
                {this.state.posts.map(function(post){
                return <div key={post.id}>{post.caption}</div>
            })}
            </PostCard>
        }
    }