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
  
  export const setFormDataForEdit = post => {
    const postFormData = {
      caption: post.attributes.caption
    }
    return {
      type: "POST_FORM_FOR_EDIT",
      postFormData
    }
  }
  