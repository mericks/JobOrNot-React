import { combineReducers } from 'redux';
import { uploads } from './uploadFiles-reducer';
import { userAuth } from './general-reducers';

export default combineReducers({
    uploads,
    userAuth
});
