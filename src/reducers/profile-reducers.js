export function profileStats(state = {}, action) {
    switch (action.type) {
        case 'PROFILE_FETCH_DATA_SUCCESS':
            return action.resume;
        default:
            return state;
    }
}
