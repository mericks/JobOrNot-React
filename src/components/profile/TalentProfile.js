import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const TalentProfile = (props) => {
    return (
        <div>
            <p>THIS IS TALENTPROFILE SECTION</p>
            <p>username = {props.user.username}</p>
        </div>
    );
}

export default connect(mapStateToProps)(TalentProfile);

TalentProfile.propTypes = {
    user: PropTypes.object
};
