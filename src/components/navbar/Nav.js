import React, { PropTypes } from 'react';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

const Nav = (props) => {
  if(props.signedIn) return (<SignedInNav />)
  else if (!props.signedIn) return (<SignedOutNav />)
};

Nav.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default Nav;