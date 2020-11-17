// Synchronous

  export const userPosts = posts => {
      return {
        type: "USER_POSTS",
        posts
      }
    }

  export const updatePostForm = post => {
    return {
      type: "UPDATE_POST_FORM",
      post
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

  export const createPost = (post, history) => {
    return dispatch => {
      const newPostData = {
        image: post.image,
        caption: post.caption,
        user_id: post.userId 
      }
      return fetch("https://localhost:3001/api/v/posts", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPostData)
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addPost(resp.data))
          history.push(`/posts/${resp.data.id}`)
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
