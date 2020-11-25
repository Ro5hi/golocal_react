import { resetPostForm } from './postForm.js'

// Synchronous

  export const userPosts = posts => {
      return {
        type: "USER_POSTS",
        posts
      }
    }
    
  export const clearPosts = () => {
    return {
      type: "CLEAR_POSTS"
    }
  }
  
  export const addPost = post => {
    return {
      type: "ADD_POST",
      post
    }
  }

  // Asynchronous

  export const createPost = (post, history) => {
   return dispatch => {
      console.log("Trying to create", post)
      return fetch('http://localhost:3001/api/v1/newpost', {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" }
      })
        .then(r => r.json())
        .then(post => {
          if (post.error) {
            console.log("error creating", post)
            alert(post.error)
          } else {
          console.log("successfully created", post)
          dispatch(addPost(post))
          dispatch(resetPostForm())
          history.push(`/posts`)
        }
        })
        .catch(console.log)
    }
  }
  
  export const getPosts = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/posts", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
          },
        })
      .then(r => r.json())
      .then(posts => {
        console.log("posts:", posts)
        if (posts.error) {
          alert(posts.error)
        } else {
            console.log("Posts Data:", posts.data)
            dispatch(userPosts(posts.data))
          }
        })
        .catch(console.log)
    }
  }