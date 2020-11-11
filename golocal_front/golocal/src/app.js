import React from 'react'
import { connect } from 'react-redux'
import { currentuser } from './actions/currentUser.js'
import LoggingOut from './components/Logout'
import {
    Switch,
    Route
  } from "react-router-dom";
import Editprofile from './components/EditProfile.js'
import Posts from './components/Posts.js'
import Post from './components/Post.js'
import Profile from './components/Profile.js'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentuser()
        }
    

        render() {
            const { loggedIn, posts } = this.props 
            return (
                <div className= "Home">
                        { loggedIn ? <LoggingOut/> : null }
                    <Switch>
                        <Route exact path='/posts' component={Posts}/>
                        <Route exact path='/newpost' component={Post}/>
                        <Route exact path='/profile' render={props => {
                            const post = posts.find(post => post.id === props.match.params.id)
                            return <PostCard post={post} {...props}/>
                        } }  />
                        <Route exact path='/account/:id' component={Editprofile}/>
                    </Switch>
                </div>
            );
        }
    }
        mapStateToProps = state => {
            return ({
                loggedIn: !!state.currentuser
            })  
        }

    export default withRouter(connect(mapStateToProps, { currentuser })(App))