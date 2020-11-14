import React from 'react'
import { connect } from 'react-redux'
import Component from 'react'

    class Posts extends Component {
        render() {
            return (
                <div>
                    {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
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