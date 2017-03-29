import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

const ProfileFormFields = (props) => {
    let obj = props.user;
    for (const prop in obj) {
        console.log('obj: ', prop, '=', obj[prop])
        let formFields = obj[prop];
        return <li>{formFields}</li>;
    };
};

const ProfileInfo = (props) => {
    return (
        <ul>{ProfileFormFields}</ul>
    );
}    

export default connect(mapStateToProps)(ProfileInfo);

ProfileInfo.propTypes = {
    user: PropTypes.object
};