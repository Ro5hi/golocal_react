import { combineReducers } from 'redux'
import signupForm from './reducers/signupReducer'
import loginForm from './reducers/loginReducer'
import { currentUser } from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'
import postForm from './reducers/postReducer'
import postsReducer from './reducers/postsReducer'

    const rootReducer = combineReducers({
        loginForm,
        signupForm,
        user: currentUser,
        users: usersReducer,
        postForm,
        posts: postsReducer,
    })
    
    export default rootReducer