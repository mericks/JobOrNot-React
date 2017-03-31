import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

const RecruiterLikedResumes = (props) => (
    <div>
            <h5>Hot Talent Ready for Hire</h5>
            {props.user.likedResumes}
    </div>
);

export default connect(mapStateToProps)(RecruiterLikedResumes);

RecruiterLikedResumes.propTypes = {
    user: PropTypes.object
};
