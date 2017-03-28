import { combineReducers } from 'redux';
import { uploads } from './uploadFiles-reducer';
import { userAuth } from './auth-reducers';

export default combineReducers({
    uploads,
    userAuth
});
