import React, { Component } from 'react';
import SingleInput from './SingleInput';


class RecruiterForm extends Component {
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
        };

        this.handleFormSignUp = this.handleFormSignUp.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            jobTitleToFill: this.state.jobTitleToFill,
            jobCompanyToFill: this.state.jobCompanyToFill,
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
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
 
    render() {
        return (  
            <form onSubmit={this.handleFormSignUp}>
                <h1>THIS FORM SIGNS UP RECRUITERS</h1>
                <SingleInput 
                    title={'First Name'}
                    name={'firstName'}
                    inputType={'text'}
                    content={this.state.firstName}
                    controlFunc={this.handleChange}
                    placeholder={'First Name'} />
                <SingleInput 
                    title={'Last Name'}
                    name={'lastName'}
                    inputType={'text'}
                    content={this.state.lastName}
                    controlFunc={this.handleChange}
                    placeholder={'Last Name'} />
                <SingleInput 
                    title={'User Name'}
                    name={'userName'}
                    inputType={'text'}
                    content={this.state.userName}
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
        )
    };
}

export default RecruiterForm;