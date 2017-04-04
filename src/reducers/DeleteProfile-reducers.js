export function deleteProfile(state = '', action) {
    switch (action.type) {
        case 'RESUME_DELETE_PROFILE_SUCCESS':
            return action.message;
        default: 
            return state;
    }
}
