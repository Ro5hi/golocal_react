const initialState = null

const postFormReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_POST':
            return initialState 
        case "RESET_POST_FORM":
            return initialState
        default:
            return state
    }
}

export default postFormReducer