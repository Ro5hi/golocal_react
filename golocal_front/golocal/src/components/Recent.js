import React from 'react'
import { Link } from "react-router-dom";
import Posts from './Posts'
import styled from "styled-components";


    const Recent = () => {
        return (
        <>
            <Header>
                <p><h1>RECENT</h1></p>
            </Header>
            <Activity>
                <Posts />    
            </Activity>
        </>
        )
    }

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

    export default Recent