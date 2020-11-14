const initialState = {
    image: "",
    caption: "",
}


const postReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_POST':
        return state.concat([action.data])
    case 'DELETE_POST':
        return state.filter((post) => post.id !== action.id)
    default:
        return initialState;
        }
    }

    export default postReducer