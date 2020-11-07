import React from 'react';
import styled from "styled-components";
import Join from './Join.js';
import Category from './Category.js';


    const App = () => {
        return (
            <Container>
                <Title>GO LOCAL</Title>
                <Join></Join>
                <Category></Category>
            </Container>
        );
    };

    const Container = styled.div`
        position: absolute;
        width: 1680px;
        height: 960px;
        left: 0px;
        top: 0px;
        background: #FBEABE;position: absolute;
        width: 1680px;
        height: 960px;
        left: 0px;
        top: 0px;
        background: #FBEABE;
    `

    const Title = styled.div`
        position: absolute;
        left: 5.21%;
        right: 49.94%;
        top: 9.27%;
        bottom: 55.37%;
        font-family: Abril Fatface;
        font-style: strong;
        font-weight: normal;
        font-size: 144px;
        line-height: 194px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    export default App