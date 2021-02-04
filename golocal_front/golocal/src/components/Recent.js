import React from 'react'
import Posts from './Posts'
import styled from "styled-components";


    const Recent = () => {
        return (
            <Container>
                <Header>
                    <p>RECENT</p>
                </Header>
                <Activity>
                    <Posts />    
                </Activity>
            </Container> 
        )
    }

        const Container = styled.div`
            position: relative;
            display: flex;
            width: 100%
            height: 100%
        `
       
        const Header = styled.div`
            position: absolute;
            display: flex;
            left: 10.21%;
            right: 49.94%;
            top: 550px;
            bottom: 55.37%;
            font-family: Abril Fatface;
            font-style: normal;
            font-weight: normal;
            font-size: 75px;
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

    export default Recent