import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { userPosts } from './post.js'

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
                dispatch(userPosts())
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
                body: JSON.stringify(userInfo)
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
    }

        export const logout = () => {
            return dispatch => {
              dispatch(clearSession())
              return fetch('http://localhost:3001/api/v1/logout', {
                credentials: "include",
                method: "DELETE"
              })
            }
          }
          
          export const getCurrentSession = () => {
            return dispatch => {
              return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                    dispatch(userPosts())
                  }
                })
                .catch(console.log)
            }
          }