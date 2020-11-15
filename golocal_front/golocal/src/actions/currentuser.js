import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { updateProfileForm } from './editProfileForm.js'
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
            return fetch('http://localhost:3000/api/v1/login', {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(r => r.json())
            .then(user => {
                if (user.error) { 
                alert(user.error)
            } else {
                dispatch(currentUser(user.data))
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
            return fetch("http://localhost:3000/api/v1/signup", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(currentUser(user.data))
                    dispatch(resetSignupForm)
                    history.push('/')
                }
            })
            .catch(console.log)
        }
    }

    export const edit = (credentials, history) => {
        return dispatch => {
            const profileInfo = {
                user: credentials
            }
            return fetch("http://localhost:3000/api/v1/editprofile", {
                credentials: "include",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileInfo)
            })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(currentUser(user.data))
                    dispatch(updateProfileForm)
                    history.push('/')
                }
            })
            .catch(console.log)
        }
    }

        export const logout = (credentials, history) => {
            return dispatch => {
              dispatch(clearSession())
              return fetch('http://localhost:3000/api/v1/logout', {
                credentials: "include",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
              })
            }
          }
          
        export const getCurrentSession = () => {
            return dispatch => {
              return fetch("http://localhost:3000/api/v1/get_current_user", {
                credentials: "include",
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
              })
                .then(r => r.json())
                .then(user => {
                  if (user.error) {
                    alert(user.error)
                  } else {
                    dispatch(currentUser(user.data))
                    dispatch(userPosts())
                  }
                })
                .catch(console.log)
            }
        }