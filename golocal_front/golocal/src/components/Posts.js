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
        height: 800px;
        width: 2800px;
        left: 0px;
        top: 0px;
        background-image: linear-gradient(to right, rgb(217,	180,	105), rgb(255, 255, 255));
      `