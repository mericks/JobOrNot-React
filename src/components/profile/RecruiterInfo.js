import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const RecruiterInfo = (props) => (
    <div>
        <h4>Profile</h4>
            <p>Name: {props.user.firstName} {props.user.lastName}</p>
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
            <p>Company: {props.user.company}</p>
        <br />
        <Link to='/recruitersignup'><button>Edit profile</button></Link>
    </div>
);

export default connect(mapStateToProps)(RecruiterInfo);

RecruiterInfo.propTypes = {
    user: PropTypes.object
};
