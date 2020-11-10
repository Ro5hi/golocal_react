import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/currentuser.js'

    const loggingOut = ({ logout, history }) => {
        return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
            }
        }>
            <input type="submit" value="Log Out"/>
        </form>
        )
    }

    export default withRouter(connect(null, { logout } )(loggingOut))