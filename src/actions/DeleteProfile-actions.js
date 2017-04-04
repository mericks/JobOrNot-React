import { itemsHasErrored } from './general-actions';
import fetcher from '../helpers';

export function deleteProfileSuccess(message) {
    return {
        type: 'RESUME_DELETE_PROFILE_SUCCESS',
        message
    };
}

export function deleteProfileFail(message) {
    return {
        type: 'RESUME_DELETE_PROFILE_FAIL',
        message
    };
}

export function deleteProfile(options) {
    return (dispatch) => {
        return fetcher(options)
            .then(message => {
                return dispatch(deleteProfileSuccess(message));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
