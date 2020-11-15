import React from 'react'
// import Uploader from '.src/components/Uploader.js'
import { connect } from 'react-redux'
import { updateProfileForm } from '../actions/editProfileForm.js'
import { edit } from '../actions/currentUser.js'
import styled from 'styled-components'

        const editProfile = ({ profileFormData, updateProfileForm, edit, history }) => {
                const profileInput = event => {
                    const { name, value } = event.target
                    const profileInfo = {
                        ...profileFormData,
                        [name]: value,
                    }
                    updateProfileForm(profileInfo)
                }

                const businessInput = event => {
                    const { name, value } = event.target 
                    const updateBusiness = {
                        ...profileFormData,
                        business: {
                            ...profileFormData.business,
                            [name]: value
                        }
                    } 
                    updateProfileForm(updateBusiness)
                }

                const submitHandler = event => {
                    event.preventDefault()
                    edit(profileFormData, history)
                }

                return (
                    <form onSubmit={submitHandler}>
                        <Container>
                                <Name>
                                    <input placeholder="Name" value={profileFormData.name} name="name" type="text" onChange={profileInput} />
                                </Name>
                                <Email>
                                    <input placeholder="Email" value={profileFormData.email} name="email" type="text" onChange={profileInput} />
                                </Email>
                                <Username>
                                    <input placeholder="Username" value={profileFormData.username} name="username" type="text" onChange={profileInput} />
                                </Username>
                                <Password>
                                    <input placeholder="Password" value={profileFormData.password} name="password" type="text" onChange={profileInput} />
                                </Password>
                                    <Business>
                                        <input placeholder="Business Name" value={profileFormData.business.name} name="business_name" type="text" onChange={businessInput} />
                                    </Business>
                                    <Address>
                                        <input placeholder="Business Address" value={profileFormData.business.address} name="business_address" type="text" onChange={businessInput} />
                                    </Address>
                                    <City>
                                        <input placeholder="Business City" value={profileFormData.business.city} name="business_city" type="text" onChange={businessInput} />
                                    </City>
                                    <State>
                                        <input placeholder="Business State" value={profileFormData.business.state} name="business_state" type="text" onChange={businessInput} />
                                    </State>
                                    <Zipcode>
                                        <input placeholder="Business Zipcode" value={profileFormData.business.zipcode} name="business_zipcode" type="text" onChange={businessInput} />
                                    </Zipcode>
                                        <Category>
                                            <select name="type" id="category">
                                            <option value=""></option>
                                            <option value="Unique">Unique Find</option>
                                            <option value="Shop">Local Shop</option>
                                            <option value="Service">Service</option>
                                            <option value="Eat & Drink">Eat & Drink</option>
                                            </select>
                                        </Category>
                                <submitBtn>
                                    <input type="submit" value="Update Account"/>
                                </submitBtn>
                        </Container>
                    </form>
                    );
                }
                const mapStateToProps = state => {
                        return {
                            profileFormData: state.signupForm 
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
                
    export default connect(mapStateToProps, { updateProfileForm, edit} )(editProfile)