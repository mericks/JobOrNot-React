import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

const Nav = (props) => {
    if (props.isLoggedIn) return (<SignedInNav />);
    else if (!props.isLoggedIn) return (<SignedOutNav />);
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.userAuth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Nav);

Nav.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};
