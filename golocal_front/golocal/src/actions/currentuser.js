import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { updateProfileForm } from './editProfileForm.js'
import { getMyPosts } from './post.js'

    // See current user 
    export const currentUser = user => {
        console.log(user)
        return {
            type: "SET_CURRENT_USER",
            user
        }
    }

    // Clear user session
    export const clearSession = () => {
        return {
            type: "CLEAR_SESSION"
        }
    }

    export const updateUser = user => {
        return {
            type: "UPDATED_USER",
            user
        }
    }

    export const loggedIn = user => {
        return {
            type: "LOGGED_IN",
            user
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
            .then(user => {
                if (user.error) { 
                alert(user.error)
            } else {
                console.log("inside the fetch", user)
                dispatch(currentUser(user.data))
                dispatch(getMyPosts())
                dispatch(resetLoginForm)
                history.push(`/`)
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
                    dispatch(resetSignupForm())
                    history.push(`/`)
                }
            })
            .catch(console.log)
        }
    }

    export const edit = (credentials, history) => {
        return dispatch => {
            return fetch("http://localhost:3001/api/v1/editprofile", {
                credentials: "include",
                method: "PATCH",
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
              return fetch('http://localhost:3001/api/v1/logout', {
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
              return fetch("http://localhost:3001/api/v1/get_session", {
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
                    dispatch(getMyPosts())
                  }
                })
                .catch(console.log)
            }
        }