import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from './actions/currentUser.js'
import Home from './components/Home.js'
import LoggingOut from './components/Logout.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import NewPost from './components/NewPost.js'
import Posts from './components/Posts.js'
import Editprofile from './components/Editprofile.js'
import Profile from './components/Profile.js'
import styled from 'styled-components'
import { Route, BrowserRouter as Router } from 'react-router-dom'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentUser()
        }

        render() {
            const { loggedIn } = this.props 
            return (
                <Background>
                <Home />
                <Router>
                        { loggedIn ? <LoggingOut/> : null}
                        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/newpost' component={NewPost}/>
                        <Route exact path='/posts' component={Posts}/>
                        <Route exact path='/account' component={Editprofile}/>
                </Router>
                </Background>
            );
        }
    }
    const mapStateToProps = state => {
        return ({
                loggedIn: !!state.currentUser
        })  
    }

        const Background = styled.div`
            position: absolute;
            width: 1680px;
            height: 960px;
            left: 0px;
            top: 0px;

            background: #FBEABE;
        `
        
export default connect(mapStateToProps, { currentUser })(App)