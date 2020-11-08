import React from 'react'
import Uploader from '.src/components/Uploader.js'
import { connect } from 'react-redux'
import { updateSignup } from '../actions/signupform.js'
import { register } from '../actions/currentuser.js'
import styled from 'styled-components'



    const signingUp = ({ signupFormData, register, updateSignup, history }) => {
        const { name, value } = event.target
        const formInput = {
            ...signupFormData,
            [name]: value
        }
        signupFormData(formInput)
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
        signupFormData(businessInput)
    }

    const submitInput = event => {
        event.preventDefault()
        register(signupFormData, history)
    }

    // Extract data
    const mapStateToProps = state => {
        return {
            signupFormData: state.signupForm
        }
    }

    const Signup = () => {
        return (
            <Container>
                <Uploader>
                </Uploader>
                    <Name>
                        <input placeholder="Name" value={signupFormData.name} name="name" type="text" onChange={signingUp} />
                    </Name>
                    <Email>
                        <input placeholder="Email" value={signupFormData.email} name="email" type="text" onChange={signingUp} />
                    </Email>
                    <Username>
                        <input placeholder="Username" value={signupFormData.username} name="username" type="text" onChange={signingUp} />
                    </Username>
                    <Password>
                        <input placeholder="Password" value={signupFormData.password} name="password" type="text" onChange={signingUp} />
                    </Password>
                        <Business>
                            <input placeholder="Business Name" value={signupFormData.business.name} name="business_name" type="text" onChange={businessInfo} />
                        </Business>
                        <Address>
                            <input placeholder="Business Address" value={signupFormData.business.address} name="business_address" type="text" onChange={businessInfo} />
                        </Address>
                        <City>
                            <input placeholder="Business City" value={signupFormData.business.city} name="business_city" type="text" onChange={businessInfo} />
                        </City>
                        <State>
                            <input placeholder="Business State" value={signupFormData.business.state} name="business_state" type="text" onChange={businessInfo} />
                        </State>
                        <Zipcode>
                            <input placeholder="Business Zipcode" value={signupFormData.business.zipcode} name="business_zipcode" type="text" onChange={businessInfo} />
                        </Zipcode>
                            <Category>
                                <select name="type" id="category">
                                <option value=""></option>
                                <option value="Unique">Nourishment</option>
                                <option value="Local Shop">Membership</option>
                                <option value="Services">Entertainment</option>
                                <option value="Eat">Service</option>
                                </select>
                            </Category>
                    <submitBtn>
                        <input type="submit" value="Register"/>
                    </submitBtn>
            </Container>
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

    const Uploader = styled.div`
        position: absolute;
        width: 244px;
        height: 233px;
        left: 485px;
        top: 164px;
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

    export default connect(mapStateToProps, { updateSignup, register})(signingUp)