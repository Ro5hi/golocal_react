import { resetLoginForm } from './loginform.js'
import { resetSignupForm } from './sigupform.js'

    export const currentUser = user => {
        return {
            type: "CURRENT_USER",
            user
        }
    }

    export const clearSession = () => {
        return {
            type: "CLEAR_SESSION"
        }
    }

    export const login = (credentials, history) => {
        return dispatch => {
            return fetch('https://localhost:3001/api/v1/login', {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(r => r.json())
            .then(response => {
                if (response.error) 
                alert(response.error)
            } else {
                dispatch(currentUser(response.data))
                dispatch(resetLoginForm())
                history.push('/')
            }
            })
        }
    }