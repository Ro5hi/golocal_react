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
        width: 390px;
        height: 875px;
        left: 104px;
        top: 72px;
    `