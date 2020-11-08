import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginform.js'
import { login } from '../actions/currentuser.js' 
import styled from 'styled-components'


    const userInput = event => {
        const { name, value } = event.target
        const formInput = {
            ...loginFormData,
            [name]: value
        }
        formInput 
    }

    const userSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    // Extract Data
    const mapStateToProps = state => {
        return {
            loginFormData: state.loginForm
        }
    }

    const Login = () => {
        return (
        <form onSubmit={userSubmit}>
            <Container>
                <Username>
                    <input placeholder ="Username" value={loginform.username} name="Username" type="text" onChange={userInput} />
                </Username>
                        <Password>
                            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={userInput} />
                        </Password>
                <submitBtn>
                    <input type="submit" value="Log In"/>
                </submitBtn>
            </Container>
        </form>
        );
    }

    const Container = styled.div`
        position: absolute;
        width: 778px;
        height: 600px;
        left: 0px;
        top: 4px;
        
        background: #FBEABE;
        border: 1px solid rgba(9, 112, 38, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const Username = styled.div`
        position: absolute;
        width: 778px;
        height: 600px;
        left: 0px;
        top: 4px;
        background: #FBEABE;
        border: 1px solid rgba(9, 112, 38, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const Password = styled.div`
        position: absolute;
        width: 361px;
        height: 25px;
        left: 0px;
        top: 32px;
        background: #FFFFFF;
    `

    const submitBtn = styled.div`
        position: absolute;
        width: 102px;
        height: 26px;
        left: 0px;
        top: 1px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    `
    
    export default connect(mapStateToProps, { updateLoginForm, login})(Login)