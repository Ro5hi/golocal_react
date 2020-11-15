import React from 'react'
import PostCard from './PostCard.js'
import ProfileCard from './ProfileCard.js'
import Navbar from './Navbar.js'
import styled from 'styled-components'
import { Component } from 'react'

    export default class Profile extends Component {
        render() {
            return (
                <UserProfile>
                    <Navbar />   
                        <ProfileCard />
                    <PostCard />
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