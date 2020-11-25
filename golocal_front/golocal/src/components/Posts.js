import React from "react";
import styled from "styled-components";
import { getPosts } from '../actions/post.js'
import { connect } from 'react-redux'
import PostCard from './PostCard.js'
import Footer from './Footer.js'

  class Posts extends React.Component {
        componentDidMount(){
          this.props.getPosts()
        }
      
        render(){
          return (
            <Container>
                <PostCard />
                <Footer />
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