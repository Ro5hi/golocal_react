import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import loginForm from './reducers/loginReducer'
import postReducer from './reducers/postReducer'
import signupForm from './reducers/signupReducer'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUserReducer'
import thunk from 'redux-thunk'

    const reducer = combineReducers({
        loginForm,
        postReducer,
        signupForm,
        usersReducer,
        currentUser
    })

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

    export default store