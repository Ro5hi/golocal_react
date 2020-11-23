import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import signupForm from './reducers/signupReducer'
import loginForm from './reducers/loginReducer'
import { currentUser } from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'
import postForm from './reducers/postReducer'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'

    const reducer = combineReducers({
        loginForm,
        signupForm,
        currentUser,
        usersReducer,
        postForm,
        posts: postsReducer,
    })

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

    export default store