import React from 'react'
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
              <Footer>
              <FooterText>
                        Go Local ©  2020
                    </FooterText>
                </Footer>  
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

      const Footer = styled.div`
          position: absolute;
          display: flex;
          width: 301px;
          height: 80px;
          left: -200px;
          top: 750px;
      `
      const FooterText = styled.div`
          position: absolute;
          display: flex;
          width: 301px;
          height: 24px;
          left: 800px;
          top: 37px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.015em;
          color: rgba(0, 0, 0, 0.8);
        `
      
export default connect(mapStateToProps, { createPost, updatePostForm })(PostForm);
