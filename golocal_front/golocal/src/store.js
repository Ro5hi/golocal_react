import rootReducer from './reducers/root.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware} from 'redux'

    const initialState = {}
    const middleware = [thunk]
    const Store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    )

    export default Store