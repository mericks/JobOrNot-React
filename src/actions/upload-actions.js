import fetcher from '../helpers';
import { itemsHasErrored } from './general-actions';

export function uploadSuccess(resume) {
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        resume
    };
}

export function uploadFail(error) {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        error
    };
}

export function sendSkills(options) {
    return (dispatch) => {
        fetcher(options)
            .then(resume => {
                dispatch(uploadSuccess(resume));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}

export function uploadDocumentRequest({ file, name }) {
    let data = new FormData();
    data.append('file', file);
    data.append('name', name);
    return (dispatch) => {
        return fetch('http://localhost:4000/myResume', {
            method: 'POST',
            body: data
        })
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => {
            return res.json();
        })
            .then(res => dispatch(uploadSuccess(res)))
            .catch(error => dispatch(uploadFail(error)));
    };
}
