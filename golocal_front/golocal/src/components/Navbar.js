import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import loggingOut from './Logout'

    const Navbar = ({ user, loggedIn }) => {
        return (
            <Bar>
                <Links>
                <ul><NavLink exact to="/posts">Feed</NavLink></ul>
                <ul><NavLink exact to="/newpost">New Post</NavLink></ul><br />
                <ul><NavLink exact to={`/profile/${user.id}`}>Profile</NavLink></ul>
                <ul><NavLink exact to="/logout">Log out</NavLink></ul>
                </Links>
                <User>{ loggedIn ? <><p id="loggedIn">Hello, {user.attributes.username}</p> <loggingOut /> </> : null}</User>
            </Bar>
        )
    }
    
    const mapStateToProps = ({ user }) => {
        return {
            user,
            loggedIn: !!user
        }
    }

        const Links = styled.div`
            a:link, a:hover {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            position: relative;
            width: 0px;
            height: 0px;
            left: -39px;
            top: 100px;
            font-family: Abril Fatface;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 25px;
            text-align: center;
            letter-spacing: 0.13em;
            text-transform: uppercase;
            color: #FFFFFF; }
        `

        const User = styled.div`
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            position: relative;
            width: 0px;
            height: 0px;
            left: -72px;
            top: 10px;
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
            position: left;
            display: flex;
            width: 100px;
            height: 800px;
            top: 75px;
            background: #EAAD75;
            border: 1px solid rgba(255, 122, 0, 0.44);
            box-sizing: border-box;
        `
        export default connect(mapStateToProps)(Navbar)