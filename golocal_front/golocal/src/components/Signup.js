import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { register } from '../actions/currentUser.js'
import styled from 'styled-components'


    const SignUp = ({ signupFormData, updateSignupForm, register, history}) => {
        const userInfo = event => {
            const { name, value } = event.target
            const userInput = {
                ...signupFormData,
                [name]: value
            }
            updateSignupForm(userInput)
        }
    

        const businessInfo = event => {
            const { name, value } = event.target 
            const businessInput = {
                ...signupFormData,
                business: {
                    ...signupFormData.business,
                    [name]: value
                }
            } 
            updateSignupForm(businessInput)
        }

        const submitHandler = event => {
            event.preventDefault()
            register(signupFormData, history)
        }
        
            return (
                <form onSubmit={submitHandler}>
                    <Container>
                        <Header>
                            <h1>User Profile</h1>
                        </Header>
                        <Name>
                            <input placeholder="Name" value={signupFormData.name} name="name" type="text" onChange={userInfo} />
                        </Name>
                        <Username>
                            <input placeholder="Username" value={signupFormData.username} name="username" type="text" onChange={userInfo} />
                        </Username>
                        <Password>
                            <input placeholder="Password" value={signupFormData.password} name="password" type="text" onChange={userInfo} />
                        </Password>
                            <Business>
                                <input placeholder="Business Name" value={signupFormData.business.name} name="name" type="text" onChange={businessInfo} />
                            </Business>
                            <Address>
                                <input placeholder="Business Address" value={signupFormData.business.address} name="address" type="text" onChange={businessInfo} />
                            </Address>
                            <City>
                                <input placeholder="Business City" value={signupFormData.business.city} name="city" type="text" onChange={businessInfo} />
                            </City>
                            <State>
                                <input placeholder="Business State" value={signupFormData.business.state} name="state" type="text" onChange={businessInfo} />
                            </State>
                            <Country>
                                <input placeholder="Business Country" value={signupFormData.business.country} name="country" type="text" onChange={businessInfo} />
                            </Country>
                            <Zipcode>
                                <input placeholder="Business Zipcode" value={signupFormData.business.zipcode} name="zipcode" type="text" onChange={businessInfo} />
                            </Zipcode>
                        <Button>
                            <input type="submit" value="Register"/>
                        </Button>
                    </Container>
                </form>
            );
        }
        
        const mapStateToProps = state => {
            return {
                signupFormData: state.signupForm
            }
        }

            const Container = styled.div`
                display: flex;
                position: absolute;
                width: 400px;
                height: 920px;
                left: 1000px;
                top: 4px;
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

            const Name = styled.div`
                position: absolute;
                width: 361px;
                height: 75px;
                left: 29px;
                top: 300px;
            `
            const Username = styled.div`
                position: absolute;
                width: 360px;
                height: 56px;
                left: 29px;
                top: 325px;
            `

            const Password = styled.div`
                position: absolute;
                width: 361px;
                height: 57px;
                left: 29px;
                top: 350px;
            `

            const Business = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: 29px;
                top: 400px;
            `

            const Address = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: 29px;
                top: 425px;
            `

            const City = styled.div`
                position: absolute;
                width: 95px;
                height: 25px;
                left: 29px;
                top: 450px;
            `
            
            const State = styled.div`
                position: absolute;
                width: 55px;
                height: 25px;
                left: 29px;
                top: 475px;
            `
            const Country = styled.div`
                position: absolute;
                width: 55px;
                height: 25px;
                left: 29px;
                top: 500px;
            `
            const Zipcode = styled.div`
                position: absolute;
                width: 73px;
                height: 25px;
                left: 29px;
                top: 525px;
            `

            const Button = styled.div`
                position: absolute;
                width: 102px;
                height: 100px;
                left: 29px;
                top: 675px;
            `

    export default connect(mapStateToProps, { updateSignupForm, register} )(SignUp)