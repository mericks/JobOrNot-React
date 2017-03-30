import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const SignedOutNav2 = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/home'>Job or Not</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href='/howitworks'>How it Works</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title='Sign in' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1}>username form goes here</MenuItem>
          <MenuItem eventKey={3.2}>password goes here</MenuItem>
          <MenuItem eventKey={3.3}>submit button</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

// ReactDOM.render(signedOutNav2, mountNode);

export default SignedOutNav2;
