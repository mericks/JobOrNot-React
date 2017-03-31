import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogoutSuccess } from '../../actions/auth-actions';
import logo from '../../assets/JobOrNot_Blue_50.png';

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
        <nav className='navbar'>
            <div className='container'>
                <div className='row'>
                    <div className='three columns'>
                        <Link to='/'><img src={logo} alt='Job or Not' /></Link>
                    </div>
                    <div className='nine columns'>
                        <Link to='/' className='u-pull-right' onClick={(e) => {
                            {/*e.preventDefault();*/}
                            props.handleSignOut();
                            props.history.push('/');
                            }}>Sign Out</Link>
                        <Link to='/resume-display' className='u-pull-right'>Your Resume</Link>
                        <Link to='/profile' className='u-pull-right'>Profile</Link>
                        Welcome, {props.user.firstName}
                        <Link to='/howitworks' className='u-pull-right'>How It Works</Link>
                    </div>
                  </div>
              </div>
        </nav>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNav);
