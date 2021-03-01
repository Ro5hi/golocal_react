import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { connect } from 'react-redux'
import { getAllUsers } from '../actions/user.js'

    class Index extends React.Component {
        componentDidMount(){
            this.props.getAllUsers()
          }

        renderComponents = () => {
            <Container>
                <Navbar />
                <Footer />
            </Container>
        }

        render(){
            return (
               this.renderComponents()
            )
        }
    }

    export default connect(null, {getAllUsers})(Index)
    
    const Container = styled.div`
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: #FBEABE;
    `

