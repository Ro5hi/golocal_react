import React from 'react'
import { connect } from "react-redux";
import { updatePostForm } from '../actions/post.js'
// import styled from 'styled-components'

    const PostForm = ({ formData, updatePostForm, userId, post, postSubmit, editThisPost}) => {
        const { caption } = formData 
        
        const submitHandler = event => {
          const { name, value } = event.target 
          updatePostForm(name, value)
        }

        return (
          <div className="post-form">
            <h1>New Post</h1>
            <form onSubmit={event => {
              event.preventDefault()
              postSubmit(formData) }}>
              <input type="text" placeholder="post" value={caption} onChange={submitHandler}/>
              <input type="submit" value={ editThisPost ? "Update Post" : "New Post"}/>
            </form>
          </div>  
        );
      }
      const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : ""
        return {
          formData: state.postForm,
          userId
        }
      }

export default connect(mapStateToProps, { updatePostForm })(PostForm);
