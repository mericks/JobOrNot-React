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
                <h2>Start a new resume collection</h2>
                <ResumeSearchForm />
            </section>
            <button>button that allows profile update</button>
            <button>button to go view resumes</button> {/* this goes in ResumeSearchForm*/}
            <section>
                __liked resumes go here__
                {props.user.likedResumes}
            </section>
        </div>
    );
};

export default connect(mapStateToProps)(RecruiterProfile);
