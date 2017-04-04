import { combineReducers } from 'redux';
import { uploads } from './uploadFiles-reducer';
import { userAuth } from './auth-reducers';
import { displayResumes, viewResume } from './ResumeDisplay-reducers';
import { profileStats } from './profile-reducers';
import { deleteProfile } from './DeleteProfile-reducers';

export default combineReducers({
    uploads,
    userAuth,
    displayResumes,
    viewResume,
    profileStats,
    deleteProfile
});
