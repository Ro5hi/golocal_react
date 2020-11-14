const initialState = null

const postFormReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_POST':
            return initialState 
        case "RESET_POST_FORM":
            return initialState
        case 'DELETE_POST':
            return state.filter((post)=> post.id !== action.id);
        default:
            return state
    }
}

export default postFormReducer