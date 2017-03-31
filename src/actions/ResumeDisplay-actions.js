import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general-actions';

export function resumeFetchArraySuccess(resume) {
    return {
        type: 'RESUME_FETCH_ARRAY_SUCCESS',
        resume
    };
}

export function resumeToViewSuccess(resume) {
    return {
        type: 'RESUME_TO_VIEW_SUCCESS',
        resume
    };
}

export function resumeVoteUp(options) {
    return (dispatch) => {
        return fetcher(options)
            .catch(() => dispatch(itemsHasErrored(true)));
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
