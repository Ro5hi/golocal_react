export const businessReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BUSINESSES':
            return action.payload
        default:
            return state
    }
}

export default businessReducer 