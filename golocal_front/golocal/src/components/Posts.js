import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react'
import NewPost from './NewPost'

    class Posts extends Component {
        render() {
            return (
                <div>
                    {this.props.posts.map((post) => <NewPost key={post.id} post={post} />)}
                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            posts: state 
        }
    }

    export default connect(mapStateToProps)(Posts)