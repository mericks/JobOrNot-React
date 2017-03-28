import React from 'react';
import TalentProfile from './TalentProfile';
import RecruiterProfile from './RecruiterProfile';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    let ProfileType;

    if(props.user.role === 'talent') ProfileType = TalentProfile;
    else ProfileType = RecruiterProfile;

    return (
        <div>
            <h1>Hello {props.user.firstName}</h1>
            <ProfileInfo user={props.user} />
            <ProfileType />
        </div>
    )
};


export default Profile;