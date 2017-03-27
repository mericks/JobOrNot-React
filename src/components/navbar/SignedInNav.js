import React, { PropTypes } from 'react';

const SignedInNav = (props) => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo' /></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li>Profile</li>
        <li>{props.button}</li>
      </ul>
    </nav>
  )
}

SignedInNav.propTypes = {
  button: PropTypes.node.isRequired,
}

export default SignedInNav;