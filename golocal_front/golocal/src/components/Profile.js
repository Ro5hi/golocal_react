import React from 'react'
import PostCard from './components/PostCard.js'
import ProfileCard from './components/ProfileCard.js'
import Navbar from './components/Navbar.js'
import styled from 'styled-components'
import reactDom, { render } from 'react-dom'

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