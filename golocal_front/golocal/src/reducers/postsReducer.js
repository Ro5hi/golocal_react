const initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_POSTS":
      return action.posts
    case "ADD_POST":
      return state.concat(action.post)
    case "CLEAR_POSTS":
      return initialState
    default:
      return state
  }
}

export default postsReducer