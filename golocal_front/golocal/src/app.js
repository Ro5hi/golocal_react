import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from './actions/currentUser.js'
import LoggingOut from './components/Logout'
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
                <Home>
                <Router>
                        { loggedIn ? <LoggingOut/> : null}
                        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/newpost' component={NewPost}/>
                        <Route exact path='/posts' component={Posts}/>
                        <Route exact path='/account' component={Editprofile}/>
                </Router>
                </Home>
            );
        }
    }
    const mapStateToProps = state => {
        return ({
                loggedIn: !!state.currentUser
        })  
    }

        const Home = styled.div`
            position: absolute;
            width: 1680px;
            height: 960px;
            left: 0px;
            top: 0px;

            background: #FBEABE;
        `
        
export default connect(mapStateToProps, { currentUser })(App)