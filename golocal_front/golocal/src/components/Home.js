import React from 'react';
import styled from "styled-components";
import Join from './Join.js';
// import Search from './Search.js';


    const Home = () => {
        return (
            <Container>
                <Title>GO LOCAL</Title>
                <Join />
                {/* <Search /> */}
                <Footer>
                    <FooterText>
                        Go Local ©  2020
                    </FooterText>
                </Footer>
            </Container>
        );
    };

    const Container = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: #FBEABE;position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: #FBEABE;
    `

    const Title = styled.div`
        position: absolute;
        left: 1.21%;
        right: 49.94%;
        top: 9.27%;
        bottom: 55.37%;
        font-family: Abril Fatface;
        font-style: normal;
        font-weight: normal;
        font-size: 144px;
        line-height: 194px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    const Footer = styled.div`
        position: absolute;
        display: flex;
        width: 100%;
        height: 80px;
        left: 0px;
        top: 100%;
    `
    const FooterText = styled.div`
        position: absolute;
        width: 301px;
        height: 24px;
        left: 690px;
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

    export default Home