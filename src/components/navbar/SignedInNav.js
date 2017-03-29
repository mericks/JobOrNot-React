import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogoutSuccess } from '../../actions/auth-actions';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        handleSignOut() {
            dispatch(userLogoutSuccess());
        }
    };
};

const SignedInNav = (props) => {
    return (
      <nav>
        <ul>
          <li><img src='https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50' alt='logo' /></li>
          <li>JobOrNot</li>
          <li>How It Works</li>
          <li>Profile</li>
          <li>Welcome, {props.user.firstName}</li>
          {/* THIS WORKS (30-34)...but it may need to be improved...*/}
          <li><Link to='/' onClick={(e) => {
              {/*e.preventDefault();*/}
              props.handleSignOut();
              props.history.push('/');
          }}>Sign Out</Link></li>
        </ul>
      </nav>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(SignedInNav);
