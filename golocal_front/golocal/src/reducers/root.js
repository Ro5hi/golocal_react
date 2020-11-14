import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { bizReducer } from './businessForm'
import { loginReducer } from './loginForm'
import { signupReducer } from './signupForm'
import { postFormReducer } from './postForm'

export const rootReducer = combineReducers({
    signup: signupReducer,
    users: usersReducer,
    business: bizReducer,
    login: loginReducer,
    post: postFormReducer
})