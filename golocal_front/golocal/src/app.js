import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from './actions/currentUser.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import PostCard from './components/PostCard.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import NewPost from './components/NewPost.js'
import Posts from './components/Posts.js'
import Editprofile from './components/Editprofile.js'
import Profile from './components/Profile.js'
import styled from 'styled-components'
import { Route, Switch, withRouter } from 'react-router-dom'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentUser()
        }
        // {loggedIn ? <RouterComp /> : null}

        render() {
            const { loggedIn, posts, users } = this.props 
            return (
                <>
                { loggedIn ? <Navbar/> : <Home/> }
                <Background>
                    <Switch>
                        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/newpost' component={NewPost}/>
                        <Route exact path='/posts' component={Posts}/>
                        <Route exact path='/account/:id' render={props => {
                            const user = users.find(user => user.id === props.match.params.id) 
                            return <Editprofile user={user} {...props} />
                        }
                        }/>
                        <Route exact path='/posts/:id' render={props => {
                            const post = posts.find(post => post.id === props.match.params.id)
                            return <PostCard post={post} {...props}/>
                        }
                        }/>
                    </Switch>
                </Background>
                </>
            );
        }
    }
    const mapStateToProps = state => {
        return ({
                loggedIn: !!state.currentUser,
                posts: state.getPosts
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
        
export default withRouter(connect(mapStateToProps, { currentUser })(App))