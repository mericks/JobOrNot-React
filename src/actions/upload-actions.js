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
    data.append('file', document);
    data.append('name', name);

    return (dispatch) => {
        fetch.post('/resumes', data)
        .then(res => dispatch(uploadSuccess(res)))
        .catch(error => dispatch(uploadFail(error)));
    };
}
