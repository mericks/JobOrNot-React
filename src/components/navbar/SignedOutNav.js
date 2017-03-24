import React from 'react';

const SignedOutNav = (props) => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo'/></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li>{props.button}</li>
      </ul>
    </nav>
  )
}

export default SignedOutNav;