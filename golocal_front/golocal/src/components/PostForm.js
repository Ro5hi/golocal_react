import React from 'react'
import { connect } from "react-redux";
import { createPost } from '../actions/post.js';
import { updatePostForm } from '../actions/postForm.js'
import styled from 'styled-components'

    const PostForm = ({ formData, updatePostForm, userId, post, editThisPost}) => {
        // debugger
        const { caption, value } = formData 

        const changeHandler = event => {
          const { caption, value } = event.target 
          updatePostForm(caption)
        }

        const handleSubmit = event => {
          event.preventDefault()
          createPost(formData)
        }
        
        return (
          <Container>
            <Header>
              <h1>New Post</h1>
            </Header>
              <FormBox>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Make your new post here..." value={value} onChange={changeHandler}/>
                  <submitButton>
                    <input type="submit" value={ editThisPost ? "Update Post" : "New Post"}/>
                  </submitButton>
                </form>
              </FormBox>
          </Container>  
        );
      }
      const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : ""
        return {
          formData: state.postForm,
          userId
        }
      }


      const Container = styled.div`
        position: absolute;
        width: 300px;
        height: 500px;
        left: 800px;
        top: 350px;
        background: #FBEABE;
        border: 1px solid rgba(9, 112, 38, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `

      const Header = styled.div`
        position: absolute;
        width: 663px;
        height: 71px;
        left: 29px;
        top: 13%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 59px;
        color: #000000;
      `

      const FormBox = styled.div`
        position: absolute;
        width: 778px;
        height: 600px;
        left: 29px;
        top: 300px;
      `

      const submitButton = styled.div`
        position: absolute;
        width: 102px;
        height: -46px;
        left: 29px;
        top: 375px;
      `
      
export default connect(mapStateToProps, { createPost, updatePostForm })(PostForm);
