import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import loginForm from '../reducers/loginReducer'
import { login } from '../actions/currentUser.js' 
import styled from 'styled-components'

    const Login =  ({ loginFormData, updateLoginForm, login, history }) => {
        const userInput = event => {
            const { name, value } = event.target
            const formInput = {
                ...loginFormData,
                [name]: value
            }
            updateLoginForm(formInput) 
        }

        const userSubmit = event => {
            event.preventDefault()
            login(loginFormData)
        }
        
        return (
            <form onSubmit={userSubmit}>
                <Container>
                    <Header>
                        <h1> Log In </h1>
                    </Header>
                    <Username>
                        <input placeholder ="Username" value={loginForm.username} name="username" type="text" onChange={userInput} />
                    </Username>
                            <Password>
                                <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={userInput} />
                            </Password>
                    <Button>
                        <input type="submit" value="Log In"/>
                    </Button>
                </Container>
            </form>
            );
        }
            // Extract Data
            const mapStateToProps = state => {
            return {
                loginFormData: state.loginForm
            }
        }
        
        const Container = styled.div`
            position: absolute;
            width: 300px;
            height: 500px;
            left: 1000px;
            top: 200px;
            background: #FBEABE;
            border: 1px solid rgba(9, 112, 38, 0.1);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `
        
        const Header = styled.div`
            position: absolute;
            width: 663px;
            height: 71px;
            left: 29px;
            top: 13%;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 59px;
            color: #000000;
        `

        const Username = styled.div`
            position: absolute;
            width: 778px;
            height: 600px;
            left: 29px;
            top: 300px;
        `
        
        const Password = styled.div`
            position: absolute;
            width: 361px;
            height: 25px;
            left: 29px;
            top: 325px;
        `
        
        const Button = styled.div`
            position: absolute;
            width: 102px;
            height: -46px;
            left: 29px;
            top: 375px;
        `
        
        export default connect(mapStateToProps, { updateLoginForm, login})(Login)