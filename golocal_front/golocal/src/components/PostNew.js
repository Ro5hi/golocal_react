import React from 'react'
import PostForm from './PostForm.js'
import { createPost } from '../actions/post.js'
import { connect } from 'react-redux'

const NewPost = ({ history, createPost }) => {

    const handleSubmit = (formData, userId) => {
        createPost({
            ...formData,
            userId
        }, history )
    }
    return <PostForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createPost })(NewPost)