import React from 'react';
import styled from "styled-components";
import Join from './Join.js';
import Navbar from './Navbar.js'
import PostForm from './PostForm.js'
import Posts from './Posts.js'
import { loggedIn } from '../actions/currentUser.js'


    const Index = () => {
        return (
            <Container>
                {/* <Posts /> */}
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

    const Footer = styled.div`
        position: absolute;
        display: flex;
        width: 301px;
        height: 80px;
        left: 0px;
        top: 100%;
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

    export default Index