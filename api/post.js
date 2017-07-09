import axios from 'axios';
import {AsyncStorage} from  'react-native';

export default {
    async getAllPosts() {
        return AsyncStorage
            .getItem('authToken')
            .then(token => axios
                .get('https://cw-instaclone.herokuapp.com/api/posts', {
                    headers: {
                        'Authorization': `JWT ${token}`
                    }
                })
            )
            .then(r => {
                console.log('Did we get here?', r.data);
                return r.data;
            });
    },

    async addPost(post) {
        return AsyncStorage
            .getItem('authToken')
            .then(token => {
                console.log('HEY LOOK A ', token);
                return axios
                .post('https://cw-instaclone.herokuapp.com/api/posts', {
                    headers: {
                        'Authorization': `JWT ${token}`
                    }
                }, post)
            })
            .then(r => {
                console.log('Did we get here?', r.data);
                return r.data;
            });
    },

    updatePost(post) {
        return axios
            .put(`https://cw-instaclone.herokuapp.com/api/posts/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            }, post);
    },

    deletePost(post) {
        return axios
            .delete(`https://cw-instaclone.herokuapp.com/api/posts/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            });
    },

    addComment(post, comment) {
        return axios
            .post(`https://cw-instaclone.herokuapp.com/api/posts/${post._id}/comments`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            }, comment)
            .then(r => r.data);
    },

    deleteComment(post, comment) {
        return axios
            .delete(`https://cw-instaclone.herokuapp.com/api/posts/${post._id}/comments/${comment._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            })
            .then(r => r.data);
    }
};