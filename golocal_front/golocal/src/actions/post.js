import { currentUser } from './currentUser.js'
import { resetPostForm } from './postForm.js'
import { updatePostForm } from './postForm.js'

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

  export const deletedPost = postId => {
    return {
      type: "DELETE_POST",
      postId
    }
  }

  // Asynchronous

  // debugger
  export const createPost = (post, history) => {
  //  return dispatch => {
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
          // dispatch(addPost(post.data))
          // dispatch(resetPostForm())
          history.push("/posts")
        }
        })
        .catch(console.log)
    // }
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
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            console.log(response.data)
            dispatch(userPosts(response.data))
          }
        })
        .catch(console.log)
    }
  }

  export const editPost = (postData, history) => {
    return dispatch => {
        const postEditData = {
            caption: postData.caption
        }
        return fetch(`http://localhost:3001/api/posts/${postData.postId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postEditData)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updatePostForm(resp.data))
                history.push(`/posts/${resp.data.id}`)
            }
        })
        .catch(console.log)
      }
  }

  export const deletePost = (postId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/posts/${postId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deletedPost(postId))
        dispatch(getPosts())
        history.push(`/posts`)
      }
    })
    .catch(console.log)
  }
}
