import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default {
    register (registrationData) {
        return axios
            .post('https://cw-instaclone.herokuapp.com/api/users/register', registrationData)
            .then(r => r.data);
    },

    login(email, password) {
        return axios
            .post('https://cw-instaclone.herokuapp.com/api/users/login', { email, password })
            .then(r => {
                AsyncStorage.setItem('authToken', r.data.token);
                return r.data.token;
            });
    },

    getUserPosts() {
        return axios
            .get('https://cw-instaclone.herokuapp.com/api/users/posts')
            .then(r => r.data);
    }
};