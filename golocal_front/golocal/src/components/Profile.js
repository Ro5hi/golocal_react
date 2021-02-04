import React from 'react'
import ProfileCard from './ProfileCard.js'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Component } from 'react'
import { getAllUsers } from '../actions/user.js'

    class Profile extends Component {
        componentDidMount(users){            
            console.log("This is", users)
          }
        render() {
            return (
                <UserProfile>
                    <ProfileCard />
                </UserProfile>
            );       
        }
    }

    export default connect(null, {getAllUsers})(Profile)
    

    const UserProfile = styled.div`
        position: relative;
        width: 0px;
        height: 0px;
        left: 0px;
        top: 0px;
    `
    