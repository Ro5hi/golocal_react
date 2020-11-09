import axios from 'axios'

            const root = location.href.indexOf('localhost') > 0 ? 'http://localhost:3001/api' : '/api';
            export async function getPosts() {
                const request = axios({
                    method: 'GET',
                    url: `${root}/posts`,
                    headers: []
                })
                return {
                    type: FETCH_POSTS,
                    payload: request
                };
            }

            export async function fetchedPosts(posts) {
                return {
                    type: GET_POSTS_SUCCESS,
                    payload: posts 
                };
            }

            export async function postsFetchFailed(error) {
                return {
                    type: GET_POSTS_FAILED,
                    payload: error 
                };
            }

            export async function fetchPost(id) {
                const request = axios.get(`${root}/posts/${id}`);

                return {
                    type: GET_POST,
                    payload: request
                };
            } 

            export async function fetchedPost(activePost) {
                return {
                    type: GET_POST_SUCCESS,
                    payload: activePost
                };
            }

            export async function postFetchFailed(error) {
                return {
                    type: FETCH_POST_FAILURE,
                    payload: error 
                };
            }

            export async function uploadPost(props) {
                const request = axios({
                    method: 'POST',
                    body: JSON.stringify({
                        image: Post.image,
                        descripion: Post.descripion,
                        user_id: Post.user_id,
                        url: `${root}/posts`,
                    })
                })
            }

            export async function uploadSuccess(newPost) {
                return {
                    type: UPLOAD_POST_SUCCESS,
                    payload: newPost
                }
            }

            export async function uploadFailed(error) {
                return {
                    type: UPLOAD_POST_FAILED,
                    payload: error
                };
            }

            export async function deletePost(id) {
                const request = axios({
                    method: 'DELETE',
                    url: `${root}/posts/${id}`,
                })
                return {
                    type: POST_DELETED,
                    payload: request
                };
            }

            export async function postDeleted(deletedPost) {
                return {
                    type: POST_DELETED,
                    payload: deletedPost
                };
            }
            
            export async function deleteFailed(response) {
                return {
                    type: DELETE_FAILED,
                    payload: response
                };
            }

            
    // Post Feed 
        export const GET_POSTS = 'GET_POSTS';
        export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
        export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';

    // Fetch Post 
        export const GET_POST = 'GET_POST';
        export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
        export const GET_POST_FAILED = 'GET_POST_FAILED';

    // New Post 
        export const UPLOAD_POST = 'UPLOAD_POST';
        export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
        export const UPLOAD_FAILED = 'UPLOAD_FAILED';
        
    // Delete Post 
        export const DELETE_POST = 'DELETE_POST';
        export const POST_DELETED = 'POST_DELETED';
        export const DELETE_FAILED = 'DELETE_FAILED';

    // Validate Post Params
        export const VALIDATE_POST_PARAMS = 'VALIDATE_POST_PARAMS';
        export const POST_PARAMS_SUCCESS = 'POST_PARAMS_SUCCESS';
        export const POST_PARAMS_FAILED = 'POST_PARAMS_FAILED';

    // Reset Post Form
        export const RESET_POST_FORM = 'RESET_POST_FORM';