export function uploads(state = {}, action) {
    switch (action.type) {
        case 'UPLOAD_DOCUMENT_SUCCESS':
            console.log('data: ', action);
            return action.resume;
        case 'UPLOAD_DOCUMENT_FAIL':
            return action.error;
        default:
            return state;
    }
}
