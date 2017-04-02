import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const TalentInfo = (props) => (
    <div>
        <h4>Profile</h4>
            <p>Name: {props.user.firstName} {props.user.lastName}</p>
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
        <br />
        <button><Link to='/talentsignup'>Edit profile</Link></button>
    </div>
);

export default connect(mapStateToProps)(TalentInfo);

TalentInfo.propTypes = {
    user: PropTypes.object
};
