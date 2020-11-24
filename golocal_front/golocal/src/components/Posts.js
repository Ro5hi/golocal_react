import React from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";

    export default class Posts extends React.Component {
    
      state = {
        posts: []
      }
    
      componentDidMount(){
        fetch('http://localhost:3001/api/v1/post')
          .then(response => response.json())
          .then(posts => {
            this.setState({ posts: posts.data });
            console.log(posts);
          });
      }
    
      render(){
        return (
          <Container>
              {this.state.posts.map(function(item, index){
                return <div key={item.id}>{item.message}</div>
              })}
          </Container>
        );
      }
    }

    const Container = styled.div`
      position: absolute;
      width: 300px;
      height: 500px;
      left: 400px;
      top: 350px;
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