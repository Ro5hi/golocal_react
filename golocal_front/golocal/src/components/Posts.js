import React from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";

    const Posts = ({ posts, currentUser }) => {
      return (
        <Container>
          <Header>All Posts</Header>
          <PostCard />
        </Container>
      )
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

    export default Posts 