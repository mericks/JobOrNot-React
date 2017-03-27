import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const SignedOutNav = (props) => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo'/></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li><Link to='/signin'>Sign In</Link></li>
      </ul>
    </nav>
  )
}

SignedOutNav.propTypes = {
}

export default SignedOutNav;