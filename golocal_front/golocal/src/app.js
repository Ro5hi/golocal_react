import React from 'react'
import { connect } from 'react-redux'
import { currentuser } from './actions/currentuser.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import LoggingOut from './components/Logout'
import { render } from 'react-dom'
import { Route, Switch, withRouter } from 'react-router-dom'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentuser()
        }
    }

    render() {
        const { loggedIn } = this.props 
        return (
            <div className= "Go Local">
                { loggedIn ? <Navbar location={this.props.location}/> : <Home/ > }
                <Switch>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/newpost' component={Post}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/account/:id' component={Editprofile}/>
                    <Route exact path='/logout' component={Loggingout}/>
                </Switch>
            </div>
        )
    }