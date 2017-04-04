import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const ProfileInfo = (props) => {
    let user = props.user;

    return (
        <div>
            <h3>Your Profile</h3>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}; 

export default connect(mapStateToProps)(ProfileInfo);

ProfileInfo.propTypes = {
    user: PropTypes.object
};
