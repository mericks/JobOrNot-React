import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import TalentProfile from './TalentProfile';
import RecruiterProfile from './RecruiterProfile';
import Nav from '../navbar/Nav';
import UploadFiles from '../forms/UploadFiles';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const Profile = (props) => {
    let ProfileType;
    if (props.user.role === 'talent') ProfileType = TalentProfile;
    else if (props.user.role === 'recruiter') ProfileType = RecruiterProfile;
    else ProfileType = UploadFiles;

    return (
        <div>
            <Nav />
            <ProfileType />
        </div>
    );
};

export default connect(mapStateToProps)(Profile);

Profile.propTypes = {
    user: PropTypes.object
};
