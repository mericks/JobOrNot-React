import React from 'react';
import ResumeForm from '../forms/ResumeForm';
import TalentStats from './TalentStats';

const TalentProfile = (props) => {
    let TalentStatus;
    if (!props.state.myResume) TalentStatus = ResumeForm;
    else TalentStatus = TalentStats;

    return (
        <div>
            <p>THIS IS TALENTPROFILE SECTION</p>
            <TalentStatus />
        </div>
    );
};

export default TalentProfile;
