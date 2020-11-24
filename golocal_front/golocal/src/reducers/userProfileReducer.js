const initialState = {
    bio: ""
  }
  
  export const profileForm = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE_FORM":
        return action.profileFormData
      case "RESET_PROFILE_FORM":
        return initialState
      default:
        return state
    }
  }

  export default profileForm