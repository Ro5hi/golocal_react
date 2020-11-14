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
            dispatch(getPosts(response.data))
          }
        })
        .catch(console.log)
    }
  }

  export const deletePost = (post, history) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/posts/%{post.id}`, {
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
        dispatch(deletedPost(post.id))
        dispatch(getPosts())
      }
    })
    .catch(console.log)
  }
}