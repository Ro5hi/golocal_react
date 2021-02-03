import React from 'react'
import ProfileCard from './ProfileCard.js'
import styled from 'styled-components'
import { Component } from 'react'

    export default class Profile extends Component {

        render() {
            return (
                <UserProfile>
                    <ProfileCard />
                </UserProfile>
            );    
        }
    }

    const UserProfile = styled.div`
        position: relative;
        width: 0px;
        height: 0px;
        left: 0px;
        top: 0px;
    `
    