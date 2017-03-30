import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general-actions';

export function resumeFetchArraySuccess(resume) {
    return {
        type: 'RESUME_FETCH_ARRAY_SUCCESS',
        resume
    };
}

export function resumeFetchFileSuccess(data) {
    return {
        type: 'RESUME_FETCH_FILE_SUCCESS',
        data
    };
}

export function resumeFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return fetcher(options)
            .then(resumes => {
                return dispatch(resumeFetchArraySuccess(resumes));
            })
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function resumeFetchFile(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        const { method, path, body, token } = options;
        return fetch(`${path}`, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })
    .then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.blob();
    })
    .then(data => {
        console.log('data: ', data);
        return dispatch(resumeFetchFileSuccess(data));
    })
    .then(dispatch(itemsIsLoading(false)))
    .catch(() => dispatch(itemsHasErrored(true)));
    };
}
