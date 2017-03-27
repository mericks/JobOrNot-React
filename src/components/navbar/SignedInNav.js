import React, { PropTypes } from 'react';

const SignedInNav = (props) => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo' /></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li>Profile</li>
        <li>Welcome _name here_</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  )
}

SignedInNav.propTypes = {
}

export default SignedInNav;