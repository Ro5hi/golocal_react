import { connect } from "react-redux";
import { updatePostForm } from '../actions/post.js'
import { createPost } from '../actions/post.js'
// import styled from 'styled-components'

    const PostForm = ({ postFormData, updatePostForm, createPost, history }) => {
        const postCaption = event => {
          const { name, value } = event.target 
          const postInput = {
            ...postFormData,
            [name]: value
          }
          updatePostForm(postInput)
        }

        const submitHandler = event => {
          event.preventDefault()
          createPost(postFormData, history)
        }

        return (
          <div className="post">
          <h1>New Post</h1>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="caption" value={postFormData.caption} onChange={postCaption} />
            <button>Submit Post</button>
          </form>
        </div>  
      );
    }
    const mapStateToProps = state => {
      const userId = state.currentUser ? state.currentUser.id : ""
      return {
        postFormData: state.postForm,
        userId
      }
    }

export default connect(mapStateToProps, { updatePostForm, createPost} )(PostForm);
