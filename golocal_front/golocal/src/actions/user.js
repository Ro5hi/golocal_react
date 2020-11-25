export const getUsers = users => {
    return {
        type: "GET_USERS",
        users
    }
}

export const getAllUsers = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/users", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
          },
        })
      .then(r => r.json())
      .then(users => {
        console.log("users:", users)
        if (users.error) {
          alert(users.error)
        } else {
            console.log("users Data:", users.data)
            dispatch(getUsers(users.data))
          }
        })
        .catch(console.log)
    }
  }
