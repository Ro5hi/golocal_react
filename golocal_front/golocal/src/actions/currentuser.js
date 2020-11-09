import { resetLoginForm } from './loginform.js'
import { resetSignupForm } from './sigupform.js'

    // See current user 
    export const currentUser = user => {
        return {
            type: "CURRENT_USER",
            user
        }
    }

    // Clear user session
    export const clearSession = () => {
        return {
            type: "CLEAR_SESSION"
        }
    }

    // POST user login
    export const login = (credentials, history) => {
        return dispatch => {
            return fetch('http://localhost:3001/api/v1/login', {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(r => r.json())
            .then(response => {
                if (response.error) { 
                alert(response.error)
            } else {
                dispatch(currentUser(response.data))
                dispatch(resetLoginForm())
                history.push('/')
            }
            })
            .catch(console.log)
        }
    }

    // POST user signup
    export const register = (credentials, history) => {
        return dispatch => {
            const userInfo = {
                user: credentials
            }
            return fetch("http://localhost:3001/api/v1/signup", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(currentUser(response.data))
                    dispatch(resetSignupForm)
                    history.push('/')
                }
            })
            .catch(console.log)
        }

        // Logout user 
        export const logout = event => {
            return dispatch => {
                dispatch(clearSession())
                return fetch ('http://localhost:3001/api/v1/logout'), {
                    credentials: "include",
                    method: "DELETE"
                }
            }
        }

        // Get user session
        export const getSession = () => {
            return dispatch => {
                return fetch("http://localhost:3001/api/v1/get_session", {
                    credentials: "include",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then(r => r.json())
                .then(response => {
                    if (response.error) {
                        alert(response.error)
                    } else {
                        dispatch(currentUser(response.data))
                    }
                })
                .catch(console.log)
            }
        }
    }