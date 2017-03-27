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
