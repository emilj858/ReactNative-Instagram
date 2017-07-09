import authApi from '../api/auth';

export function login(email, password) {
    return {
        type: 'LOGIN',
        payload: authApi.login(email, password)
    };
}

export function register(registration) {
    return {
        type: 'REGISTER',
        payload: authApi.register(registration)
    };
}

export function changeLoginField(key, value) {
    return {
        type: 'CHANGE_LOGIN_FIELD',
        payload: { key, value }
    };
}

export function changeRegisterField(key, value) {
    return {
        type: 'CHANGE_REGISTER_FIELD',
        payload: { key, value }
    };
}