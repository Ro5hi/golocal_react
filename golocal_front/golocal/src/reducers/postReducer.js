    const initialState = {
        caption: ""
    }

    const postForm = (state = initialState, action) => {
        switch (action.type) {
        case "UPDATE_NEW_POST_FORM":
            const postFormInput = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return postFormInput 
        case "RESET_POST_FORM":
            return initialState
        case "EDIT_POST_FORM":
            return action.postFormData 
        default:
            return state;
        }
    }

    export default postForm