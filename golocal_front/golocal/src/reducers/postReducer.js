    const initialState = {
        caption: ""
    }

    const postForm = (state = initialState, action) => {
        switch (action.type) {
        case "UPDATE_NEW_POST_FORM":
            const postFormData = {
                ...state,
                [action.formData.caption]: action.formData.value
            }
            return postFormData 
        case "RESET_POST_FORM":
            return initialState
        case "EDIT_POST_FORM":
            return action.postFormData 
        default:
            return state;
        }
    }

    export default postForm