import fetcher from '../helpers';
import { itemsHasErrored } from './general-actions';

export function setLogin(isLoggedIn) {
    return {
        type: 'SET_LOGIN',
        isLoggedIn
    };
}

export function userLoginSuccess(user) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        user
    };
}

export function userLogoutSuccess() {
    return {
        type: 'USER_LOGOUT_SUCCESS',
    };
}

export function userSignUpSuccess(user) {
    return {
        type: 'USER_SIGNUP_SUCCESS',
        user
    };
}

export function setToken(token) {
    return {
        type: 'SET_TOKEN',
        token
    };
}

export function sendSignUp(options) {
    return (dispatch) => {
        return fetcher(options)
            .then(user => {
                dispatch(userSignUpSuccess(user));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function sendLogIn(options) {
    return (dispatch) => {
        return fetcher(options)
            .then(user => {
                dispatch(userLoginSuccess(user));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
