export function displayResumes(state = [], action) {
    switch (action.type) {
        case 'RESUME_FETCH_ARRAY_SUCCESS':
            return action.resume;
        default:
            return state;
    }
}
