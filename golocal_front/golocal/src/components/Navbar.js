import React from 'react'
import connect from 'react-redux/lib/connect/connect'
import { NavLink } from 'react-router-dom'
import LoggingOut from './Logout.js'
import styled from 'styled-components'


    const Navbar = ({ currentUser }) => {
        return (
            <Bar>
                <Logo>
                    GO LOCAL
                </Logo>
                <Links>
                    <ul>
                        { currentUser ? <><p id="curentuser">{currentUser.attributes.username}</p><LoggingOut/></> : null}
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/posts">Feed</NavLink></li>
                        <li><NavLink to="/newpost">New Post</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/editprofile">Account</NavLink></li>
                    </ul>
                </Links>
            </Bar>
        )
    }
    
    const mapStateToProps = ({ currentUser }) => {
        return {
            currentUser
        }
    }
      
        
        const Links = styled.div`
            position: absolute;
            left: 0%;
            right: 0%;
            top: 0%;
            bottom: 0%;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 25px;
            text-align: center;
            letter-spacing: -0.035em;
            color: #FFFFFF;
        `
        
        const Logo = styled.div`
            position: absolute;
            width: 332px;
            height: 46px;
            left: 0px;
            top: 14px;
            font-family: Abril Fatface;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 25px;
            text-align: center;
            letter-spacing: 0.13em;
            text-transform: uppercase;
            color: #FFFFFF;
        `
        
        const Bar = styled.div`
            position: absolute;
            width: 1680px;
            height: 60px;
            left: 0px;
            top: 0px;
            background: #EAAD75;
            border: 1px solid rgba(255, 122, 0, 0.44);
            box-sizing: border-box;
        `
        export default connect(mapStateToProps)(Navbar)