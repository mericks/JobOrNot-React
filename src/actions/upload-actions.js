export function uploadSuccess({ data }) {
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        data
    };
}

export function uploadFail(error) {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        error
    };
}

export function uploadDocumentRequest({ file, name }) {
    let data = new FormData();
    data.append('file', file);
    data.append('name', name);
    return (dispatch) => {
        return fetch('http://localhost:4000/files', {
            method: 'POST',
            body: data
        })
        .then(res => dispatch(uploadSuccess(res)))
        .catch(error => dispatch(uploadFail(error)));
    };
}
