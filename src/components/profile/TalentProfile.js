import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ResumeForm from '../forms/ResumeForm';
import TalentStats from './TalentStats';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const TalentProfile = (props) => {
    let TalentStatus;
    if (!props.user.myResume) TalentStatus = ResumeForm;
    else TalentStatus = TalentStats;

    return (
        <div>
            <p>THIS IS TALENTPROFILE SECTION</p>
            <TalentStatus />
        </div>
    );
};

export default connect(mapStateToProps)(TalentProfile);

TalentProfile.propTypes = {
    user: PropTypes.object
};

