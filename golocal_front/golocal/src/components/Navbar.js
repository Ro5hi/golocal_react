import React from 'react'
import { Link } from 'react-router-dom'
import './styles/index.css'

    const Navbar = () => {
        return (
            <div id="navbar">
                <ul>
                    <li><Link to={{ pathname: `/account`}}>Account</Link></li>
                    <li><Link to={{ pathname: `/profile`}}>Profile</Link></li>
                    <li><Link to={{ pathname: `/newpost`}}>New Post</Link></li>
                    <li> <Link to={{ pathname: `/logout`}}>Log Out</Link></li>
                    <li><Link to={{ pathname: `/tags`}}>Tags</Link></li>
                </ul>
            </div>
        );
    }

    export default Navbar