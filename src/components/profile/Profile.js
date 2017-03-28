import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TalentProfile from './TalentProfile';
import RecruiterProfile from './RecruiterProfile';
import ProfileInfo from './ProfileInfo';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const Profile = (props) => {
    let ProfileType;

    if (props.user.role === 'talent') ProfileType = TalentProfile;
    else ProfileType = RecruiterProfile;

    return (
        <div>
            <h1>Hello {props.user.firstName}</h1>
            <ProfileInfo user={props.user} />
            <ProfileType />
        </div>
    )
};

export default connect(mapStateToProps)(Profile);

Profile.propTypes = {
    user: PropTypes.object
};
