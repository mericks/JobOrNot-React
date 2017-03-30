import React from 'react';
import { Link } from 'react-router-dom';

const SignedInNav = (props) => {
    return (
      <nav>
        <ul>
          <li><img src='http://placehold.it/50x50' alt='logo' /></li>
          <li>JobOrNot</li>
          <li>How It Works</li>
          <li>Profile</li>
          <li>Welcome _name here_</li>
          <li><Link to='/resume-upload'>Resume Upload</Link></li>
          <li><Link to='/resume-display'>Resume Display</Link></li>
          <li>Sign Out</li>
        </ul>
      </nav>
    );
};

export default SignedInNav;
