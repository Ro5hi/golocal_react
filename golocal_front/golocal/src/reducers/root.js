import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { bizReducer } from './business'
import { loginReducer } from './login'
import { signupReducer } from './signup'

export const rootReducer = combineReducers({
    signup: signupReducer,
    users: usersReducer,
    business: bizReducer,
    login: loginReducer,
})