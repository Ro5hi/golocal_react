import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { bizReducer } from './businessForm'
import { loginReducer } from './loginForm'
import { signupReducer } from './signupForm'

export const rootReducer = combineReducers({
    signup: signupReducer,
    users: usersReducer,
    business: bizReducer,
    login: loginReducer,
})