import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar.js'
import { connect } from 'react-redux'
import { getAllUsers } from '../actions/user.js'

    class Index extends React.Component {
        componentDidMount(){
            this.props.getAllUsers()
          }

    render(){
        return (
            <Container>
            <Navbar />
                <Footer>
                <FooterText>
                    Go Local ©  2020
                </FooterText>
            </Footer>
        </Container>
        );
      }
    }

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

    export default connect(null, {getAllUsers})(Index)