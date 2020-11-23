// Edit Profile Actions

export const updateProfileForm = formData => {
    return {
        type: "UPDATE_PROFILE_FORM",
        formData
    }
}

export const setProfileDataForEdit = user => {
    const formData = {
      bio: user.attributes.bio
    }
    return {
      type: "PROFILE_DATA_FOR_EDIT",
      formData
    }
  }

export const resetProfileForm = () => {
    return {
        type: "RESET_PROFILE_FORM"
    }
}