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
                token: action.token
            };
        case 'USER_SIGNUP_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                token: action.token
            };
        default:
            return state;
    }
}
