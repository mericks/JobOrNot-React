import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general-actions';

export function profileFetchDataSuccess(resume) {
    return {
        type: 'PROFILE_FETCH_DATA_SUCCESS',
        resume
    };
}

export function profileFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return fetcher(options)
            .then(resume => {
                return dispatch(profileFetchDataSuccess(resume));
            })
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
