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
            // password: '',
            // company: '',
            // resume: '',
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
            // password: '',
            // company: '',
            // resume: '',
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

                <input 
                    type='submit'
                    value='submit'/>
                <button onClick={this.handleFormClear}>
                    Clear Form
                </button>
            </form>
        );
    };
}

export default Forms;