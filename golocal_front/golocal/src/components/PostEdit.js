import React from 'react';
import PostForm from './PostForm.js'
import { editPost, deletePost } from '../actions/post.js'
import { updatePostForm, resetPostForm } from '../actions/post'
import { connect } from 'react-redux'

class EditPost extends React.Component {
  componentDidMount(){
    this.props.post && this.props.updatePostForm(this.props.post)
  }

  componentDidUpdate(prevProps) {
    this.props.post && !prevProps.post && this.props.updatePostForm(this.props.post)
  }

  componentWillUnmount() {
    this.props.PostForm()
  }

  handleSubmit = (formData) => {
    const { editPost, post, history } = this.props
    editPost({
      ...formData,
      postId: post.id
    }, history)
  }

  render() {
    const { history, deletePost, post } = this.props
    const postId = post ? post.id : null
    return  <>
              <PostForm editThisPost handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deletePost(postId, history)}>Delete Post</button>
            </>
  }
};

export default connect(null, { editPost, updatePostForm, resetPostForm, deletePost })(EditPost);
