const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            console.log("reducer", action.users)
            return action.users 
        default:
            return state
    }
}

export default usersReducer