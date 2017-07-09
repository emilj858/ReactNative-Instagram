const initState = {
    loadingProfile: true,
    firstName: '',
    lastName: '',
    email: '',
    posts: []
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_PENDING':
            return { ...state, loadingProfile: true };
        case 'GET_PROFILE_FULFILLED':
            return { ...state, loadingProfile: false, ...action.payload };
        default:
            return state
    }
}

export default profileReducer;
