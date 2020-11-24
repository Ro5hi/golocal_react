import React from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";
import { getPosts } from '../actions/post.js'

      export default class Posts extends React.Component {
      
        state = {
          posts: []
        }
      
        componentDidMount(){
          this.props.getPosts()
        }
      
        render(){
          return (
            <Container>
                {this.state.posts.map(function(post){
                  return <div key={post.id}>{post.caption}</div>
                })}
            </Container>
          );
        }
      }

    const Container = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background: #fbeabe;
      border: 1px solid rgba(9, 112, 38, 0.1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;

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
    `;