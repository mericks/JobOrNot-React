import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general-actions';

export function resumeFetchDataSuccess(resume) {
    return {
        type: 'RESUME_FETCH_DATA_SUCCESS',
        resume
    };
}

export function resumeFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return fetcher(options)
            .then(resumes => {
                return dispatch(resumeFetchDataSuccess(resumes));
            })
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
