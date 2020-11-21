import React from "react";
import Posts from "./PostCard.js";
import styled from "styled-components";

    export default class PostsFeed {
    render() {
            return (
                <Container>
                    <Posts />
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
