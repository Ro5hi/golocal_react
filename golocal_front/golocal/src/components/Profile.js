import React from 'react'
import PostCard from './components/PostCard.js'
import ProfileCard from './compoents/ProfileCard.js'
import Navbar from './components/Navbar.js'

    const Profile = () => {
        return (
            <Profile>
                <NavBar>
                    {Navbar}
                </NavBar>
                    <User>
                        {ProfileCard}
                    </User>
                <UserPosts>
                    {PostCard}
                </UserPosts>
            </Profile> 
        );    
    }

    const Profile = styled.div`
        position: absolute;
        width: 390px;
        height: 875px;
        left: 104px;
        top: 72px;
    `

    const Navbar = styled.div`
        position: absolute;
        width: 1680px;
        height: 60px;
        left: 0px;
        top: 0px;
    `

    const User = styled.div`
        position: absolute;
        width: 390px;
        height: 875px;
        left: 104px;
        top: 72px;
    `

    const UserPosts = styled.div`
        position: absolute;
        width: 648px;
        height: 409px;
        left: 724px;
        top: 91px;
        border: 1px solid #000000;
        box-sizing: border-box;
    `


    export default Profile 
