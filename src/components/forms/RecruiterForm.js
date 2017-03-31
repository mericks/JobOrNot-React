import React, { Component, PropTypes } from 'react';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import { sendSignUp, updateProfile } from '../../actions/auth-actions';

class RecruiterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',   // TODO: DON'T BRING PW BACK IN THE STATE. HANDLE IN BACKEND
            company: '',
            jobTitleToFill: '',
            jobCompanyToFill: '',
        };

        this.handleFormSignUp = this.handleFormSignUp.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRecruiterUpdate = this.handleRecruiterUpdate.bind(this);
    }

    handleFormSignUp(e) {
        e.preventDefault();

        const formPayload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            jobTitleToFill: this.state.jobTitleToFill,
            jobCompanyToFill: this.state.jobCompanyToFill,
            role: 'recruiter'
        };

        this.props.signUp({ method: 'POST', path: '/signup', body: formPayload })
        .then((action) => {
            if (action.type !== 'ITEMS_HAS_ERRORED') {
                // this.handleFormClear(e);
                // this.props.history.push('/profile'); 
            } else alert('Signup was not executed correctly. Please try again.');
        })
        .catch(() => {
            console.log('at catch');
            this.handleFormClear(e);
            this.props.history.push('/profile'); 
        });
    }

    // handleFormUpdate() {
    //     // update form logic goes here
    // }

    handleFormClear(e) {
        // e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            company: '',
            jobTitleToFill: '',
            jobCompanyToFill: '',
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRecruiterUpdate(e) {
        e.preventDefault();

        const formPayload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            jobTitleToFill: this.state.jobTitleToFill,
            jobCompanyToFill: this.state.jobCompanyToFill,
            role: 'recruiter'
        };

        this.props.updateProfile({ 
            method: 'PATCH', 
            path: '/changeAccountInfo', 
            body: formPayload,
            token: this.props.token,
        })
            .then((action) => {
                if (action.type !== 'ITEMS_HAS_ERRORED') {
                    // this.handleFormClear(e);
                    // this.props.history.push('/profile'); 
                } else alert('Update was not executed correctly. Please try again.');
            })
            .catch(() => {
                console.log('at catch');
                this.handleFormClear(e);
                this.props.history.push('/profile');
            });    
    }
 
    render() {
        return ( 
            <div>
                <Nav />
                    <div className='container topComponent'>
                        <div className='row'>
                            <h3 className='headline centerText'>Recruiter Sign Up</h3>
                        </div>
                        <form onSubmit={this.handleFormSignUp}>
                        <div className='row'>
                            <div className='three columns offset-by-three'>
                                <SingleInput 
                                    title={'First Name'}
                                    name={'firstName'}
                                    inputType={'text'}
                                    content={this.state.firstName}
                                    controlFunc={this.handleChange}
                                    placeholder={'First Name'} /><br />
                                <SingleInput 
                                    title={'User Name'}
                                    name={'username'}
                                    inputType={'text'}
                                    content={this.state.username}
                                    controlFunc={this.handleChange}
                                    placeholder={'Select a User Name'} /><br />
                                <SingleInput 
                                    title={'Email Address'}
                                    name={'email'}
                                    inputType={'text'}
                                    content={this.state.email}
                                    controlFunc={this.handleChange}
                                    placeholder={'Email Address'} /><br />
                            </div>
                            <div className='three columns offset-by-one'>
                                <SingleInput 
                                    title={'Last Name'}
                                    name={'lastName'}
                                    inputType={'text'}
                                    content={this.state.lastName}
                                    controlFunc={this.handleChange}
                                    placeholder={'Last Name'} /><br />
                                <SingleInput 
                                    title={'Password'}
                                    name={'password'}
                                    inputType={'password'}
                                    content={this.state.password}
                                    controlFunc={this.handleChange}
                                    placeholder={'Select a Password'} /><br />
                                <SingleInput 
                                    title={'Company'}
                                    name={'company'}
                                    inputType={'text'}
                                    content={this.state.company}
                                    controlFunc={this.handleChange}
                                    placeholder={'Company'} /><br />
                            </div>
                        </div>
                    <div className='row multipleButtons'>
                        <div className='four columns offset-by-four centerText'>
                            <input 
                                type='submit'
                                value='submit'/><br />
                            <button 
                                type='button'
                                onClick={this.handleFormClear}>
                                Clear Form
                            </button><br />
                            <button
                                type='button'
                                onClick={this.handleRecruiterUpdate}>
                                Update profile
                            </button>

                        </div>

                    </div>
                </form>
            </div>
        </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        token: state.userAuth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signUp: (options) => dispatch(sendSignUp(options)),
        updateProfile: (options) => dispatch(updateProfile(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterForm);

RecruiterForm.propTypes = {
    signUp: PropTypes.func
};
