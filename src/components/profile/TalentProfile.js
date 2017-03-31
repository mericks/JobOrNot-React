import React from 'react';
import { connect } from 'react-redux';
import TalentInfo from './TalentInfo';
import TalentStats from './TalentStats';
import TalentViewResume from './TalentViewResume';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

/*
const TalentProfile = (props) => {
    let TalentStatus;
    if (!props.user.file) TalentStatus = ResumeForm;
    else TalentStatus = TalentStats;

    return (
        <div>
            <Link to='/talentsignup'>Edit profile</Link>
            <Link to='/resume-display'>Your Resume</Link>

            <TalentStatus />
*/
const TalentProfile = (props) => (
    <div className='container topComponent'>
        <div className='row'>
            <h2 className='headline centerText'>Show'em What You've Got</h2>
            <h4 className='hand centerText'>Upload that sexy PDF. &nbsp; Share your best skills.</h4>
            <br />
        </div>
        <div className='row'>
            <div className='four columns'>
                <TalentInfo />
            </div>
            <div className='four columns'>
                <TalentStats />
            </div>
            <div className='four columns'>
                <TalentViewResume />
            </div>
        </div>
    </div>
);

export default connect(mapStateToProps)(TalentProfile);
