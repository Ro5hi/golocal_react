import {
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED,
    GET_POST, GET_POST_SUCCESS, GET_POST_FAILED,
    UPLOAD_POST, UPLOAD_SUCCESS, UPLOAD_FAILED,
    VALIDATE_POST_PARAMS, POST_PARAMS_SUCCESS, POST_PARAMS_FAILURE,
    RESET_POST_FORM
} from '../actions/posts';

    const initialState = 
    {Posts: { posts: [], error: null, loading: false},
    newPost:{post: null, error: null, loading: false},
    activePost:{post: null, error: null, loading: false},
    };

    export default function(state = initialState, action) {
        let error;
        switch(action.type) {
            case GET_POSTS:
                return { ...state, Posts: {posts:[], error: null, loading: true} };
            case GET_POSTS_SUCCESS:
                return { ...state, Posts: {posts:[], error: error, loading: false} };
            case GET_POSTS_FAILED:
                return { ...state, Posts: {posts: [], error: error, loading: false} };
            case GET_POST:
                return { ...state, activePost:{...state.activePost, loading: true} };
            case GET_POST_SUCCESS:
                return { ...state, Posts: {posts:action.payload, error: null, loading: false} };
            case GET_POST_FAILED:
                error = action.payload || {message: action.payload.message};
                return { ...state, Posts: {posts:[], error: error, loading: false} };
            case UPLOAD_POST:
                return { ...state, newPost: {...state.newPost, loading: true} };
            case UPLOAD_POST_SUCCESS:
                return { ...state, newPost: {post: action.payload, error: null, loading: false} };
            case UPLOAD_POST_FAILED:
                error = action.payload || {message: action.payload.message};
                return { ...state, newPost: {post: null, error: error, loading: false} };
            case VALIDATE_POST_PARAMS:
                return { ...state, newPost:{...state.newPost, error: null, loading: true} };
            case POST_PARAMS_SUCCESS:
                return { ...state, newPost:{...state.newPost, error: null, loading: false} };
            case POST_PARAMS_FAILURE:
                let posted = action.payload;
                if(!posted) {
                    error = {message: action.payload.message};
                } else {
                    error = {title: post.title, image: post.image, description: post.description};
                }
                return { ...state, newPost:{...state.newPost, error: error, loading: false} };
            case RESET_POST_FIELDS:
                return { ...state, newPost:{...state.newPost, error: null, loading: null} };
            default:
                return state;
        }
    }