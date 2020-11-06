import styled from "styled-components";
import React, { Component } from 'react';

    const App = () => {
        return (
            <Wrapper>
            <Container>
                <h1>test</h1>
            </Container>    
            </Wrapper>
        );
    };

    const Container = styled.div`
        background: #FBEABE;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    `;

    const Wrapper = styled.div`
        background-position:center;
        width: 100%;
        height: 100%;
    `;

    export default App
