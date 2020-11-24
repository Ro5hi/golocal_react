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
                    </Container>
                    );
                }
                const mapStateToProps = state => {
                        return {
                            formData: state.profileForm 
                    }
                }
        
                const Container = styled.div`
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0px;
                top: 0px;
                background: #FBEABE;
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

            const Bio = styled.div`
                position: absolute;
                width: 361px;
                height: 25px;
                left: 29px;
                top: 400px;
            `

            const Button = styled.div`
                position: absolute;
                width: 102px;
                height: 100px;
                left: 29px;
                top: 500px;
            `
                
    export default connect(mapStateToProps, { updateProfileForm, edit} )(editProfile)