// Synchronous

export const userPosts = posts => {
    return {
      type: "USER_POSTS",
      posts
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