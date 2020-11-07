import React from 'react';
import styled from "styled-components";


    const Join = () => {
        return (
            <Container>
                <Body>
                    Made for locally owned businesses who would like to make an online presence.
                </Body>
                <Button>
                    <ButtonText>
                        Join Today  
                    </ButtonText>  
                </Button>
            </Container>
        );
    };

    const Container = styled.div`
        position: absolute;
        width: 475px;
        height: 287px;
        left: 112px;
        top: 430px;
        background: #F5F5F5;
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
        /* or 158% */
        text-align: center;
        letter-spacing: -0.015em;
        color: rgba(0, 0, 0, 0.8);
    
    `

    const Button = styled.div`
        height: 52px;
        width: 165px;
        left: 0px;
        top: 0px;
        position: absolute;
        left: 32%;
        right: 0%;
        top: 60%;
        bottom: 0%;
        background: #F2994A;
        border-radius: 6px;
    `

    const ButtonText = styled.div`
        position: absolute;
        left: 26.15%;
        right: 26.97%;
        top: 29.42%;
        bottom: 30.19%;
        
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        /* identical to box height */
        
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;
        
        color: #FFFFFF;
    `



    export default Join;