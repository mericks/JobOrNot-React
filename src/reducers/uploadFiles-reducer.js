export function uploads(state = [], action) {
    switch (action.type) {
        case 'UPLOAD_DOCUMENT_SUCCESS':
            return action.data;
        case 'UPLOAD_DOCUMENT_FAIL':
            return action.error;
        default:
            return state;
    }
}
