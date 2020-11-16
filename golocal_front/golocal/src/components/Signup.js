import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { register } from '../actions/currentUser.js'
import signupForm from '../reducers/signupReducer.js'
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
                            <input placeholder="Name" value={signupForm.name} name="name" type="text" onChange={userInfo} />
                        </Name>
                        <Email>
                            <input placeholder="Email" value={signupForm.email} name="email" type="text" onChange={userInfo} />
                        </Email>
                        <Username>
                            <input placeholder="Username" value={signupForm.username} name="username" type="text" onChange={userInfo} />
                        </Username>
                        <Password>
                            <input placeholder="Password" value={signupForm.password} name="password" type="text" onChange={userInfo} />
                        </Password>
                            <Business>
                                <input placeholder="Business Name" value={signupForm.business.name} name="name" type="text" onChange={businessInfo} />
                            </Business>
                            <Address>
                                <input placeholder="Business Address" value={signupForm.business.address} name="address" type="text" onChange={businessInfo} />
                            </Address>
                            <City>
                                <input placeholder="Business City" value={signupForm.business.city} name="city" type="text" onChange={businessInfo} />
                            </City>
                            <State>
                                <input placeholder="Business State" value={signupForm.business.state} name="state" type="text" onChange={businessInfo} />
                            </State>
                            <Zipcode>
                                <input placeholder="Business Zipcode" value={signupForm.business.zipcode} name="zipcode" type="text" onChange={businessInfo} />
                            </Zipcode>
                                <Category>
                                    <select name="type" id="category">
                                    <option value={signupForm.business.blank} name=""></option>
                                    <option value={signupForm.business.unique} name="Unique Find">Unique Find</option>
                                    <option value={signupForm.business.shop} name="Local Shop">Local Shop</option>
                                    <option value={signupForm.business.service} name="Service">Service</option>
                                    <option value={signupForm.business.eat} name="Eat & Drink">Eat & Drink</option>
                                    </select>
                                </Category>
                        <submitBtn>
                            <input type="submit" value="Register"/>
                        </submitBtn>
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
                position: absolute;
                width: 778px;
                height: 600px;
                left: 0px;
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
                top: 36px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 59px;
                color: #000000;
            `

            const Name = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: 0px;
                top: 22px;
                background: #FFFFFF;
            `
            const Username = styled.div`
                position: absolute;
                width: 360px;
                height: 56px;
                left: 29px;
                top: 207px;
            `

            const Password = styled.div`
                position: absolute;
                width: 361px;
                height: 57px;
                left: 28px;
                top: 302px;
            `
            const Email = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: -1px;
                top: 31px;

                background: #FFFFFF;
            `

            const Business = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: -1px;
                top: 32px;
                background: #FFFFFF;
            `

            const Address = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: -1px;
                top: 32px;
                background: #FFFFFF;
            `

            const City = styled.div`
                position: absolute;
                width: 95px;
                height: 25px;
                left: -1px;
                top: 32px;
                background: #FFFFFF;
            `
            
            const State = styled.div`
                position: absolute;
                width: 55px;
                height: 25px;
                left: -1px;
                top: 32px;
                background: #FFFFFF;
            `

            const Zipcode = styled.div`
                position: absolute;
                width: 73px;
                height: 25px;
                left: -1px;
                top: 32px;
                background: #FFFFFF;
            `

            const Category = styled.div`
                position: absolute;
                width: 95px;
                height: 25px;
                left: -1px;
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

    export default connect(mapStateToProps, { updateSignupForm, register} )(SignUp)