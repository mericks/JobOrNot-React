import React from 'react';
import { connect } from 'react-redux';

import ResumeSearchForm from '../forms/ResumeSearchForm'

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

const RecruiterProfile = (props) => {
    return (
        <div>
            <section>
                <ResumeSearchForm />
            </section>
            <button>Update Profile</button>
            <section>
                __liked resumes go here__
                {props.user.likedResumes}
            </section>
        </div>
    );
};

export default connect(mapStateToProps)(RecruiterProfile);
