import React from 'react'
import { Link } from "react-router-dom";
import Posts from './Posts'
import styled from "styled-components";


    const Join = () => {
        return (
                <Container>
                    <Title>GO LOCAL</Title>
                    <Body>
                        Made for locally owned businesses who would like to make an online presence.
                    </Body>
                        <SignUpButton>
                            <SignUpButtonText>
                                <Link to='/signup'>Join Today</Link>
                            </SignUpButtonText>  
                        </SignUpButton>
                        <LogInButton>
                            <LogInButtonText>
                                <Link to='/login'>Log In</Link>
                            </LogInButtonText>  
                        </LogInButton>
                            <Header>
                                <p><h1>RECENT</h1></p>
                            </Header>
                        <Activity>
                            <Posts />    
                        </Activity>
                </Container> 
        );
    };

    const Container = styled.div`
        position: absolute;
        width: 475px;
        height: 287px;
        left: 112px;
        top: 430px;
        background: #FBEABE;
    `
    
    const Title = styled.div`
        position: absolute;
        left: 1.21%;
        right: 49.94%;
        top: -500px;
        bottom: 55.37%;
        font-family: Abril Fatface;
        font-style: normal;
        font-weight: bold;
        font-size: 124px;
        line-height: 140px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    const Body = styled.div`
        position: absolute;
        width: 467px;
        height: 29px;
        left: 8px;
        top: 40px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 38px;
        text-align: center;
        letter-spacing: -0.015em;
        color: rgba(0, 0, 0, 0.8);
    
    `

    const SignUpButton = styled.div`
        width: 192px;
        height: 52px;
        left: 250px;
        top: 140px;
        position: absolute;
        background: #F2994A;
        border-radius: 6px;
    `

    const SignUpButtonText = styled.div`
        a:link, a:hover {
        text-decoration: none;
        color: white;
        position: absolute;
        left: 62px;
        top: 15px;
        bottom: 30.19%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        text-decoration: none;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;
        color: #FFFFFF; }
    `

    const LogInButton = styled.div`
        position: absolute;
        width: 192px;
        height: 52px;
        left: 241px;
        top: 140px;
        left: 25px;
        background: #F2994A;
        border-radius: 6px;
    `

    const LogInButtonText = styled.div`
        a:link, a:hover {
        text-decoration: none;
        color: white;
        position: absolute;
        left: 36.05%;
        top: 15px;
        bottom: 30.19%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        text-decoration: none;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;
        color: #FFFFFF; }
    `

    const Header = styled.div`
        position: absolute;
        left: 10.21%;
        right: 49.94%;
        top: 550px;
        bottom: 55.37%;
        font-family: Abril Fatface;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    const Activity = styled.div`
        position: absolute;
        width: 475px;
        height: 287px;
        left: 12px;
        top: 600px;
        font-family: Abril Fatface;
        display: flex;
        background: #FFFFFF;      
    `
    export default Join;