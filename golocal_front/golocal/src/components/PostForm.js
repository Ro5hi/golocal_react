import React from 'react'
import { connect } from "react-redux";
import { addPost } from '../actions/post.js';
import { updatePostForm } from '../actions/postForm.js'

// import PostNew from './PostNew.js
// import styled from 'styled-components'

    const PostForm = ({ formData, updatePostForm, userId, post, editThisPost}) => {
        // debugger
        const { caption, value } = formData 

        const changeHandler = event => {
          const { value } = event.target 
          updatePostForm(caption)
        }

        const handleSubmit = event => {
          event.preventDefault()
          addPost({...formData })
        }
        
        return (
          <div className="post-form">
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Make your new post here..." value={value} onChange={changeHandler}/>
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

      /*
      const Container = styled.div`
      `
      const FormBox = styled.div`
      `
      const submitButton = styled.div`
      `
      */
export default connect(mapStateToProps, { addPost, updatePostForm })(PostForm);
