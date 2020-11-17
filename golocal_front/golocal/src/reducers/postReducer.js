    const initialState = {
        caption: ""
    }

    const postForm = (state = [], action) => {
        switch (action.type) {
        case "UPDATE_NEW_POST_FORM":
            const postFormInput = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return postFormInput 
        case 'ADD_POST':
            return state.concat([action.data])
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return action.postFormData
        default:
            return initialState;
        }
    }

    export default postForm