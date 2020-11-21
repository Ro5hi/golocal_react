// const initialState = null

export const currentUser = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
    console.log("currentUserReducer:", action)
        return action.user
        case "CLEAR_CURRENT_USER":
            return null
        default:
            return state
    }
}