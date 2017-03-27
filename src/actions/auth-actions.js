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

export function userSignupSuccess(user) {
    return {
        type: 'USER_SIGNUP_SUCCESS',
        user
    };
}

export function sendSignUp(options) {
    return (dispatch) => {
        fetcher(options)
            .then(user => {
                dispatch(userSignupSuccess(user));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
