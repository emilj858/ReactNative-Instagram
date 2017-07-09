const initState = {
    loadingPosts: false,
    addingPost: false,
    updatingPost: false,
    deletingPost: false,
    posts: [],
}

const feedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_PENDING':
            return { ...state, loadingPosts: true };
        case 'FETCH_POSTS_FULFILLED':
            console.log('FULFILLED', action);
            return { ...state, loadingPosts: false, posts: action.payload };

        case 'ADD_POST_PENDING':
            return { ...state, addingPost: true };
        case 'ADD_POST_FULFILLED':
            return { ...state, addingPost: false, posts: state.posts.concat([action.payload]) };

        case 'UPDATE_POST_PENDING':
            return { ...state, updatingPost: true };
        case 'UPDATE_POST_FULFILLED':
            return { 
                ...state, 
                updatingPost: false, 
                posts: state.posts.map(p => p._id === action.payload._id
                    ? { ...action.payload }
                    : p
                )
            };

        case 'DELETE_POST_PENDING':
            return { ...state, deletingPost: true };
        case 'DELETE_POST_FULFILLED':
            return { ...state, deletingPost: false, posts: state.posts.filter(p => p._id !== action.payload._id) };

        default:
            return state
    }
}

export default feedReducer;
