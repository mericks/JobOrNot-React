import { combineReducers } from 'redux';
import { uploads } from './uploadFiles-reducer';
import { userAuth } from './auth-reducers';
import { displayResumes } from './ResumeDisplay-reducers';

export default combineReducers({
    uploads,
    userAuth,
    displayResumes
});
