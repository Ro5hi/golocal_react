import React from 'react'
import { connect } from 'react-redux'
import { updateProfileForm } from '../actions/editProfileForm.js'
import { edit } from '../actions/currentUser.js'
import styled from 'styled-components'

        const editProfile = ({ formData, user, userId, updateProfileForm, edit, history }) => {

            const { bio } = formData 

            const profileInput = event => {
                const { name, value } = event.target 
                updateProfileForm(name, value)
              }

                const submitHandler = (event) => {
                    event.preventDefault()
                    edit(formData, history)
                }

                return (
                    <Container>
                        <form onSubmit={submitHandler}>
                            <Header>
                                <h1>User Profile</h1>
                            </Header>
                            <Bio>
                                <input placeholder="Bio" value={bio} name="Bio" type="text" onchange={profileInput} />
                            </Bio>
                            <Button>
                                <input type="submit" value="submit"/>
                            </Button>
                        </form>
                        <Footer>
                            <FooterText>
                                Go Local ©  2020
                            </FooterText>
                        </Footer>  
                    </Container>
                    );
                }
                const mapStateToProps = state => {
                        return {
                            formData: state.profileForm 
                    }
                }
        
            const Container = styled.div`
                position: relative;
                width: 400px;
                height: 100%;
                left: 100px;
                top: 50px;
                background: #FBEABE;
            `

            const Header = styled.div`
                position: relative;
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

            const Bio = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: 29px;
                top: 400px;
            `

            const Button = styled.div`
                position: relative;
                width: 102px;
                height: -46px;
                left: 29px;
                top: 375px;
            `

                    
            const Footer = styled.div`
                position: absolute;
                display: flex;
                width: 301px;
                height: 80px;
                left: -200px;
                top: 750px;
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
                
    export default connect(mapStateToProps, { updateProfileForm, edit} )(editProfile)