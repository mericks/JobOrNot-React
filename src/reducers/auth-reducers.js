const initialState = {
    isLoggedIn: false,
    token: null
};

export function userAuth(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                user: action.user.userObj,
                token: action.user.token
            };
        case 'USER_SIGNUP_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                user: action.user.userObj,
                token: action.user.token
            };
        default:
            return state;
    }
}
