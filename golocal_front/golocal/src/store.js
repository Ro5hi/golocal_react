import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import signupForm from './reducers/signupReducer'
import loginForm from './reducers/loginReducer'
import { currentUser } from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'
import postForm from './reducers/postReducer'
import postsReducer from './reducers/postsReducer'
import profileForm from './reducers//userProfileReducer'
import thunk from 'redux-thunk'

    const rootReducer = combineReducers({
        loginForm,
        signupForm,
        profileForm,
        currentUser,
        usersReducer,
        postForm,
        posts: postsReducer,
    })
    
    export default rootReducer