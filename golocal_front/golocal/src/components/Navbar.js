import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

    const Navbar = ({ user, loggedIn }) => {
        return (
            <Bar>
                <Logo>
                    GO LOCAL
                </Logo>
                    <li><NavLink exact to="/home">Home</NavLink></li>
                    <li><NavLink exact to="/posts">Feed</NavLink></li>
                    <li><NavLink exact to="/newpost">New Post</NavLink></li>
                    <li><NavLink exact to={`/profile/${user.id}`}>Profile</NavLink></li>
                    <li><NavLink exact to={`/editprofile/${user.id}`}>Account</NavLink></li>
                { loggedIn ? <><p id="loggedIn">Hello, {user.attributes.username}</p><loggingOut/></> : null}
            </Bar>
        )
    }
    
    const mapStateToProps = ({ user }) => {
        return {
            user,
            loggedIn: !!user
        }
    }

        const Logo = styled.div`
            position: absolute;
            width: 332px;
            height: 46px;
            left: 200px;
            top: 75px;
            font-family: Abril Fatface;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
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
            top: 75px;
            background: #EAAD75;
            border: 1px solid rgba(255, 122, 0, 0.44);
            box-sizing: border-box;
        `
        export default connect(mapStateToProps)(Navbar)