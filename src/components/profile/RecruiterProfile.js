import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ResumeSearchForm from '../forms/ResumeSearchForm'

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

const RecruiterProfile = (props) => {
    return (
        <div>
            <Link to='/recruitersignup'>Edit profile</Link>
            <section>
                <ResumeSearchForm />
            </section>
            <section>
                __liked resumes go here__
                {props.user.likedResumes}
            </section>
        </div>
    );
};

export default connect(mapStateToProps)(RecruiterProfile);
