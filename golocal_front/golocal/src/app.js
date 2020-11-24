import React from 'react'
import { connect } from 'react-redux'
import { getCurrentSession } from './actions/currentUser.js'
import Index from './components/Index.js'
import Navbar from './components/Navbar.js'
import Signup from './components/Signup.js'
import Join from './components/Join.js'
import Login from './components/Login.js'
import loggingOut from './components/Logout.js'
import Profile from './components/Profile.js'
import ProfileEdit from './components/ProfileEdit.js'
import ProfileCard from './components/ProfileCard.js'
import Posts from './components/Posts.js'
import PostCard from './components/PostCard.js'
import PostForm from './components/PostForm.js'
import PostNew from './components/PostNew.js'
import PostEdit from './components/PostEdit.js'
import styled from 'styled-components'
import { Route, Switch, withRouter } from 'react-router-dom'

    class App extends React.Component {
        componentDidMount() {
            this.props.getCurrentSession() 
        }
        render() {
            const { loggedIn, posts, users } = this.props 
            return (
                <Background>
                        { loggedIn ? <Navbar location={this.props.location}/> : <Join /> }
                        <Switch>
                            <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/logout' component={loggingOut}/>
                            <Route exact path='/home' component={Index}/>
                            <Route exact path='/profile/:id' component={Profile}/>
                            <Route exact path='/editprofile/:id' component={ProfileEdit}/>
                            <Route exact path='/newpost' component={PostForm}/>
                            <Route exact path='/posts' component={Posts}/>
                            <Route exact path='/posts/:id' render={props => {
                                const post = posts.find(post => post.id === props.match.params.id)
                                return <PostEdit post={post} {...props}/>
                            }
                            }/>
                        </Switch>
                    
                </Background>
            );
        }
    }
    const mapStateToProps = state => {
        return ({
                loggedIn: !!state.currentUser,
                posts: state.userPosts
        })  
    }

        const Background = styled.div`
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0px;
            top: 0px;
            background: #FBEABE;
        `
        
export default withRouter(connect(mapStateToProps, { getCurrentSession })(App))