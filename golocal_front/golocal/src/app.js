import React from 'react'
import { connect } from 'react-redux'
import { currentuser } from './actions/currentuser.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import LoggingOut from './components/Logout'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Editprofile from './components/EditProfile.js'
import Posts from './components/Posts.js'
import Post from './components/Post.js'
import Profile from './components/Profile.js'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentuser()
        }
    

        render() {
            const { loggedIn } = this.props 
            return (
                <div className= "Home">
                    { loggedIn ? <Navbar location={this.props.location}/> : <Home/ > }
                    <Switch>
                        <Route exact path='/posts' component={Posts}/>
                        <Route exact path='/newpost' component={Post}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/account/:id' component={Editprofile}/>
                        <Route exact path='/logout' component={LoggingOut}/>
                    </Switch>
                </div>
            )
        };

    }

    export default App;