import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecruiterInfo from './RecruiterInfo';
import ResumeSearchForm from '../forms/ResumeSearchForm';
import RecruiterLikedResumes from './RecruiterLikedResumes';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

const RecruiterProfile = (props) => (
    <div className='container topComponent'>
        <div className='row'>
            <h2 className='headline centerText'>Find Talent Fast</h2>
            <h4 className='hand centerText'>Search by skills. Save your favorites.</h4>
            <br />
        </div>
        <div className='row'>
            <div className='four columns'>
                <RecruiterInfo />
            </div>
            <div className='four columns'>
                <ResumeSearchForm />
            </div>
            <div className='four columns'>
                <RecruiterLikedResumes />
            </div>
        </div>

    </div>
);



export default connect(mapStateToProps)(RecruiterProfile);
