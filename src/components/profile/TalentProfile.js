import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResumeForm from '../forms/ResumeForm';
import TalentStats from './TalentStats';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
        resume: state.userAuth.resume
    };
};

const TalentProfile = (props) => {
    let TalentStatus;
    if (!props.user.file) TalentStatus = ResumeForm;
    else TalentStatus = TalentStats;

    return (
        <div>
            <Link to='/talentsignup'>Edit profile</Link>
            <Link to='/resume-display'>Your Resume</Link>

            <TalentStatus />
        </div>
    );
};


TalentProfile.propTypes = {
    user: PropTypes.object
};

export default connect(mapStateToProps)(TalentProfile);
