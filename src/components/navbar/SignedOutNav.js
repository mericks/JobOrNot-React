import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JobOrNot_Blue_50.png';

const SignedOutNav = (props) => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='row'>
                    <div className='three columns'>
                        <Link to='/'><img src={logo} alt='Job or Not' /></Link>
                    </div>
                    <div className='nine columns'>
                        <Link to='/signin' className='u-pull-right'>Sign In</Link>
                        <Link to='/howitworks' className='u-pull-right'>How It Works</Link>
                    </div>
                  </div>
              </div>
        </nav>
    );
};


export default SignedOutNav;
