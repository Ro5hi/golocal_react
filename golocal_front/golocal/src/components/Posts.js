import React from "react";
import styled from "styled-components";
import { getPosts } from '../actions/post.js'
import { connect } from 'react-redux'
import PostCard from './PostCard.js'

  class Posts extends React.Component {
        componentDidMount(){
          this.props.getPosts()
        }
      
        render(){
          return (
            <Container>
                <PostCard />
                  {/* {this.props.posts.map(function(post){
                    return <div key={post.id}>{post.caption}</div>
                  })} */}
                <Footer>
                    <FooterText>
                        Go Local ©  2020
                    </FooterText>
                </Footer>
            </Container>
          );
        }
      }

      const mapStateToProps = state => {
        return {
          posts: state.posts
        }
      }

      export default connect(mapStateToProps, { getPosts })(Posts)

    const Container = styled.div`
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background: #fbeabe;
    `;

    const Card = styled.div`
      position: relative;
      display: flex;
      width: 75%;
      height: 100%;
      left: 14%;
      top: 0px;
      background: #FFFFFF;
    `;

    
    const Footer = styled.div`
        position: absolute;
        display: flex;
        width: 301px;
        height: 80px;
        left: -100px;
        top: 800px;
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