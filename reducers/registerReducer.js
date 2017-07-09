const initialAuthState = { 
    registering: false,
    user: undefined,

    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

const registerReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'CHANGE_REGISTER_FIELD':
        return { ...state, [action.payload.key]: action.payload.value };
    
    case 'REGISTER_PENDING':
        return { ...state, registering: true };
    case 'REGISTER_FULFILLED':
        return { ...state, registering: false, user: action.payload };

    default:
        return state;
  }
};

export default registerReducer;