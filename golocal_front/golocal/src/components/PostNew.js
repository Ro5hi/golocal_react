import React from 'react'
import PostForm from './PostNew.js'
import { createPost } from '../actions/post.js'
import { connect } from 'react-redux'

const NewPost = ({ history, createPost }) => {

    const submitHandler = (formData, userId) => {
        createPost({
            ...formData,
            userId
        }, history )
    }
    return <PostForm history={history} submitHandler={submitHandler} />
}

export default connect(null, { createPost })(NewPost)