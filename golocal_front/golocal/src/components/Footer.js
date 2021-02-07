import React from 'react';
import styled from "styled-components";


    export default class Footer extends React.Component {

    render(){
        return (
                <FooterContainer>
                    <FooterText>
                        Go Local ©  2020
                    </FooterText>
            </FooterContainer>
        );
    }}
    
    const FooterContainer = styled.div`
        position: absolute;
        display: flex;
        width: 301px;
        height: 80px;
        left: -150px;
        top: 800px;
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

    