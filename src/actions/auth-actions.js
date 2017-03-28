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

export function userSignUpSuccess(user) {
    return {
        type: 'USER_SIGNUP_SUCCESS',
        user
    };
}

export function sendSignUp(options) {
    console.log('options: ', options);
    return (dispatch) => {
        fetcher(options)
            .then(user => {
                console.log('user: ', user);
                dispatch(userSignUpSuccess(user));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
