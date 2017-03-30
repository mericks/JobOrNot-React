export function displayResumes(state = [], action) {
    switch (action.type) {
        case 'RESUME_FETCH_DATA_SUCCESS':
            return action.resume;
        default:
            return state;
    }
}
