import React from 'react'
import connect from 'react-redux/lib/connect/connect'
import { Link } from 'react-router-dom'
import { currentUser } from '../actions/currentUser'
import LoggingOut from './Logout.js'
import styled from 'styled-components'

    const Navbar = () => {
        return (
            <Bar>
                <Logo>
                    GO LOCAL
                </Logo>
                <Links>
                    <ul>
                        <li><Link to={{ pathname: `/posts` }}>Feed</Link></li>
                        <li><Link to={{ pathname: `/newpost`}}>New Post</Link></li>
                        <li><Link to={{ pathname: `/profile`}}>Profile</Link></li>
                        <li><Link to={{ pathname: `/account`}}>Account</Link></li>
                        <li><Link to={{ pathname: `/logout`}}>Log Out</Link></li>
                        { loggedIn ? <><p id="loggedin">{currentUser.attributes.name}</p><LoggingOut/></> : null}
                    </ul>
                </Links>
            </Bar>
        )
    }
        const mapStateToProps = ({ currentUser }) => {
            return {
                currentUser, 
                loggedIn: !!currentUser 
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
        /* or 104% */
        
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
        /* or 52% */
        
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