import React, { Component } from 'react';
import SingleInput from './SingleInput';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            company: '',
            jobTitleToFill: '',
            jobCompanyToFill: '',
            resume: '',
            // skills: [],
            // locations: [],
        };

        this.handleFormSignUp = this.handleFormSignUp.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleJobTitleToFillChange = this.handleJobTitleToFillChange.bind(this);
        this.handleJobCompanyToFillChange = this.handleJobCompanyToFillChange.bind(this);
        this.handleResumeChange = this.handleResumeChange.bind(this);
    }

    // componentDidMount() {
    //     fetch('./fetchToDB')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 firstName: data.firstName
    //             });
    //         });
    // };

    handleFormSignUp(e) {
        e.preventDefault();

        const formPayload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            jobTitleToFill: '',
            jobCompanyToFill: '',
            resume: '',
            // skills: [],
            // locations: [],

        };

        console.log('to be sent to DB - formPayload:', formPayload);
        this.handleFormClear(e);
    }

    // handleFormUpdate() {
    //     // update form logic goes here
    // }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            company: '',
            jobTitleToFill: '',
            jobCompanyToFill: '',
            resume: '',
            // skills: [],
            // locations: [],
        })
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value }, () => console.log('First Name: ', this.state.firstName));
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value }, () => console.log('Last Name: ', this.state.lastName));
    }

    handleUserNameChange(e) {
        this.setState({ userName: e.target.value }, () => console.log('User Name: ', this.state.userName));
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value }, () => console.log('Email: ', this.state.email));
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value }, () => console.log('Password: ', this.state.password));
    }

    handleCompanyChange(e) {
        this.setState({ company: e.target.value }, () => console.log('Company: ', this.state.company));
    }
    
    handleJobTitleToFillChange(e) {
        this.setState({ jobTitleToFill: e.target.value }, () => console.log('Job Title to Fill: ', this.state.jobTitleToFill));
    }

    handleJobCompanyToFillChange(e) {
        this.setState({ jobCompanyToFill: e.target.value }, () => console.log('Job Company to Fill: ', this.state.jobCompanyToFill));
    }

    handleResumeChange(e) {
        this.setState({ resume: e.target.value }, () => console.log('Resume: ', this.state.resume));
    }


    render() {
        return (
            <form onSubmit={this.handleFormSignUp}>
                <h1>THIS FORM SIGNS UP</h1>
                <SingleInput 
                    title={'First Name'}
                    name={'firstName'}
                    inputType={'text'}
                    content={this.state.firstName}
                    controlFunc={this.handleFirstNameChange}
                    placeholder={'First Name'} />
                <SingleInput 
                    title={'Last Name'}
                    name={'lastName'}
                    inputType={'text'}
                    content={this.state.lastName}
                    controlFunc={this.handleLastNameChange}
                    placeholder={'Last Name'} />
                <SingleInput 
                    title={'User Name'}
                    name={'userName'}
                    inputType={'text'}
                    content={this.state.userName}
                    controlFunc={this.handleUserNameChange}
                    placeholder={'Select a User Name'} />
                <SingleInput 
                    title={'Email Address'}
                    name={'email'}
                    inputType={'text'}
                    content={this.state.email}
                    controlFunc={this.handleEmailChange}
                    placeholder={'Email Address'} />
                <SingleInput 
                    title={'Password'}
                    name={'password'}
                    inputType={'text'}
                    content={this.state.password}
                    controlFunc={this.handlePasswordChange}
                    placeholder={'Select a Password'} />
                <SingleInput 
                    title={'Company'}
                    name={'company'}
                    inputType={'text'}
                    content={this.state.company}
                    controlFunc={this.handleCompanyChange}
                    placeholder={'Company'} />
                <SingleInput 
                    title={'Title of Role You are Working to Fill'}
                    name={'jobTitleToFill'}
                    inputType={'text'}
                    content={this.state.jobTitleToFill}
                    controlFunc={this.handleJobTitleToFillChange}
                    placeholder={'Job Title'} />
                <SingleInput 
                    title={'Company for Role You are Working to Fill'}
                    name={'jobCompanyToFill'}
                    inputType={'text'}
                    content={this.state.jobCompanyToFill}
                    controlFunc={this.handleJobCompanyToFillChange}
                    placeholder={'Hiring Company'} />
                <SingleInput 
                    title={'Resume'}
                    name={'resume'}
                    inputType={'text'}
                    content={this.state.resume}
                    controlFunc={this.handleResumeChange}
                    placeholder={'Holding box for resume uploads'} />

                <button onClick={this.handleFormClear}>
                    Clear Form
                </button>
                <input 
                    type='submit'
                    value='submit'/>
            </form>
        );
    };
}

export default Forms;