export const updatePostForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_POST_FORM",
      formData
    }
  }
  
  export const resetPostForm = () => {
    return {
      type: "RESET_NEW_POST_FORM",
    }
  }