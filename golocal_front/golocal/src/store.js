import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import loginForm from './reducers/loginReducer'
import postForm from './reducers/postReducer'
import signupForm from './reducers/signupReducer'
import usersReducer from './reducers/usersReducer'
import postsReducer from './reducers/postsReducer'
import currentUser from './reducers/currentUserReducer'
import thunk from 'redux-thunk'

    const reducer = combineReducers({
        loginForm,
        postForm,
        signupForm,
        usersReducer,
        postsReducer,
        currentUser
    })

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

    export default store