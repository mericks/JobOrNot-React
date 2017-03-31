export function displayResumes(state = [], action) {
    switch (action.type) {
        case 'RESUME_FETCH_ARRAY_SUCCESS':
            return action.resume;
        default:
            return state;
    }
}

export function resumeFileData(state = null, action) {
    switch (action.type) {
        case 'RESUME_FETCH_FILE_SUCCESS':
            return action.data;
        default:
            return state;  
    }
}
