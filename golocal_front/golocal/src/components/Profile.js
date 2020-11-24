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
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
    `