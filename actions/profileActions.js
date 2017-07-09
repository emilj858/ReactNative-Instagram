import authApi from '../api/auth';

export function getUserPosts() {
    return {
        type: 'GET_PROFILE',
        payload: authApi.getProfile()
    }
}