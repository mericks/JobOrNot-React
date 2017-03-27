import React from 'react';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

const Nav = (props) => {
  if(props.signedIn) return (<SignedInNav button={props.button}/>)
  else if (!props.signedIn) return (<SignedOutNav button={props.button} />)
};

export default Nav;