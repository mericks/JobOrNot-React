import React, { Component } from 'react';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import { sendSignUp } from '../../actions/auth-actions';

class RecruiterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            company: '',
            jobTitleToFill: '',
            jobCompanyToFill: '',
        };

        this.handleFormSignUp = this.handleFormSignUp.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSignUp(e) {
        e.preventDefault();

        const formPayload = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            jobTitleToFill: this.state.jobTitleToFill,
            jobCompanyToFill: this.state.jobCompanyToFill,
        };

        this.props.signUp({ method: 'POST', path: '/signup', body: formPayload });
        this.handleFormClear(e);
    }

    // handleFormUpdate() {
    //     // update form logic goes here
    // }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            firstname: '',
            lastname: '',
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
 
    render() {
        return ( 
            <div>
                <Nav />
                <form onSubmit={this.handleFormSignUp}>
                    <h1>THIS FORM SIGNS UP RECRUITERS</h1>
                    <SingleInput 
                        title={'First Name'}
                        name={'firstname'}
                        inputType={'text'}
                        content={this.state.firstname}
                        controlFunc={this.handleChange}
                        placeholder={'First Name'} />
                    <SingleInput 
                        title={'Last Name'}
                        name={'lastname'}
                        inputType={'text'}
                        content={this.state.lastname}
                        controlFunc={this.handleChange}
                        placeholder={'Last Name'} />
                    <SingleInput 
                        title={'User Name'}
                        name={'username'}
                        inputType={'text'}
                        content={this.state.username}
                        controlFunc={this.handleChange}
                        placeholder={'Select a User Name'} />
                    <SingleInput 
                        title={'Email Address'}
                        name={'email'}
                        inputType={'text'}
                        content={this.state.email}
                        controlFunc={this.handleChange}
                        placeholder={'Email Address'} />
                    <SingleInput 
                        title={'Password'}
                        name={'password'}
                        inputType={'text'}
                        content={this.state.password}
                        controlFunc={this.handleChange}
                        placeholder={'Select a Password'} />
                    <SingleInput 
                        title={'Company'}
                        name={'company'}
                        inputType={'text'}
                        content={this.state.company}
                        controlFunc={this.handleChange}
                        placeholder={'Company'} />
                    <SingleInput 
                        title={'Title of Role You are Working to Fill'}
                        name={'jobTitleToFill'}
                        inputType={'text'}
                        content={this.state.jobTitleToFill}
                        controlFunc={this.handleChange}
                        placeholder={'Job Title'} />
                    <SingleInput 
                        title={'Company for Role You are Working to Fill'}
                        name={'jobCompanyToFill'}
                        inputType={'text'}
                        content={this.state.jobCompanyToFill}
                        controlFunc={this.handleChange}
                        placeholder={'Hiring Company'} />
                    <button onClick={this.handleFormClear}>
                        Clear Form
                    </button>
                    <input 
                        type='submit'
                        value='submit'/>
                </form>
            </div>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signUp: (options) => dispatch(sendSignUp(options))
    };
}

export default connect(null, mapDispatchToProps)(RecruiterForm);

RecruiterForm.propTypes = {
    signUp: React.PropTypes.func
};
