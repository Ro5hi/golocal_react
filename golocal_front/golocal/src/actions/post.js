// Synchronous

  export const userPosts = posts => {
      return {
        type: "USER_POSTS",
        posts
      }
    }

  export const deletedPost = postID => {
    return {
      type: "DELETE_POST",
      postID
    }
  }

  // Asynchronous

  export const createPost = (post, history) => {
    return dispatch => {
      return fetch("https://localhost:3001/api/v/posts", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          history.push(`/`)
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

  export const deletePost = (postID, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/posts/${postID}`, {
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
        dispatch(deletedPost(postID))
        dispatch(getPosts())
        history.push(`/posts`)
      }
    })
    .catch(console.log)
  }
}