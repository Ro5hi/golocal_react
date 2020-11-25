import React from 'react'
import Footer from './Footer.js'
import { connect } from "react-redux";
import { createPost } from '../actions/post.js';
import { updatePostForm } from '../actions/postForm.js'
import styled from 'styled-components'

    const PostForm = ({ formData, userId, post, history, createPost, updatePostForm}) => {

        const { caption } = formData 

        const changeHandler = event => {
          const { name, value } = event.target 
          updatePostForm(name, value)
        }

        const handleSubmit = (event) => {
          event.preventDefault();
          createPost(formData, history);
        }
        
        return (
          <Container>
            <Header>
              <h1>New Post</h1>
            </Header>
              <FormBox>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="caption" placeholder="Make your new post here." value={caption} onChange={changeHandler}/>
                    <input type="submit" value="submit"/>
                </form>
              </FormBox>
             <Footer />
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
        position: relative;
        width: 30%;
        height: 100%;
        left: 100px;
        top: 50px;
        background: #FBEABE;
      `

      const Header = styled.div`
        position: relative;
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
        position: relative;
        width: 778px;
        height: 600px;
        left: 29px;
        top: 200px;
      `
      
export default connect(mapStateToProps, { createPost, updatePostForm })(PostForm);
