import React from 'react'
import styled from 'styled-components'


    const Category = () => {
        return (
            <Container>
                <Header>Browse by Category</Header>
                <Wrapper>Unique Finds</Wrapper>
                <Wrapper>Services</Wrapper>
                <Wrapper>Local Shops</Wrapper>
                <Wrapper>Eat</Wrapper>
            </Container>
        )
    }

    const Container = styled.div`
        position: absolute;
        width: 1680px;
        height: 568px;
        left: 5px;
        top: 871px;
    `

    const Header = styled.div`
        position: absolute;
        left: -8.04%;
        right: 55.71%;
        top: 7.22%;
        bottom: 66.37%;
        font-family: Abril Fatface;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 86px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    const Wrapper = styled.div`
        position: absolute;
        width: 392px;
        height: 338px;
        left: 1px;
        top: 1px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    `

    export default Category;
