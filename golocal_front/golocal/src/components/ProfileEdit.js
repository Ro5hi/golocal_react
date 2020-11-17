import React from 'react'
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

                const submitHandler = event => {
                    event.preventDefault()
                    edit(profileFormData, history)
                }

                return (
                    <form onSubmit={submitHandler}>
                        <Container>
                                <Header>
                                    <h1>User Profile</h1>
                                </Header>
                                <Name>
                                    <input placeholder="Name" value={profileFormData.name} name="name" type="text" onChange={profileInput} />
                                </Name>
                                <Username>
                                    <input placeholder="Username" value={profileFormData.username} name="username" type="text" onChange={profileInput} />
                                </Username>
                                <Password>
                                    <input placeholder="Password" value={profileFormData.password} name="password" type="text" onChange={profileInput} />
                                </Password>
                                <Bio>
                                    <input placeholder="Bio" value={profileFormData.bio} name="Bio" type="text" onchange={profileInput} />
                                </Bio>
                                <Button>
                                    <input type="submit" value="Update Account"/>
                                </Button>
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
                display: flex;
                width: 100%;
                height: 100%;
                left: 0px;
                top: 4px;
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