import React from 'react'
import styled from 'styled-components'


    const Category = () => {
        return (
            <Container>
                <Header>Browse by Category</Header>
                <Unique>Unique Finds</Unique>
                <Services>Services</Services>
                <Shops>Local Shops</Shops>
                <Eat>Eat</Eat>
            </Container>
        )
    }

    const Container = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 960px;
        background: #FBEABE;
    `

    const Header = styled.div`
        position: absolute;
        left: 8.04%;
        right: 55.71%;
        top: -3.22%;
        bottom: 0
        font-family: Abril Fatface;
        font-style: strong;
        font-weight: normal;
        font-size: 64px;
        line-height: 86px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.015em;
        color: #000000;
    `

    const Unique = styled.div`
        background-image
        position: absolute;
        width: 393px;
        height: 337px;
        left: 22px;
        top: 194px;
    `

    const Services = styled.div`
        position: absolute;
        width: 393px;
        height: 337px;
        left: 425px;
        top: 196px;
    `

    const Shops = styled.div`
        position: absolute;
        width: 397px;
        height: 342px;
        left: 848px;
        top: 194px;S
    `

    const Eat = styled.div`
        position: absolute;
        width: 400px;
        height: 343px;
        left: 1258px;
        top: 193px;    
    `

    export default Category;
