import React, { Component } from 'react';
import SingleInput from './SingleInput';


class TalentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            resume: '',
            skills: '',
            locations: ''
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
            resume: this.state.resume,
            skills: this.state.skills,
            locations: this.state.locations
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
            resume: '',
            skills: '',
            locations: '',
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
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
                    title={'Resume'}
                    name={'resume'}
                    inputType={'text'}
                    content={this.state.resume}
                    controlFunc={this.handleChange}
                    placeholder={'Holding box for resume uploads'} />
                <SingleInput 
                    title={'Skills'}
                    name={'skills'}
                    inputType={'text'}
                    content={this.state.skills}
                    controlFunc={this.handleChange}
                    placeholder={'Top Skills'} />
                <SingleInput 
                    title={'Locations'}
                    name={'locations'}
                    inputType={'text'}
                    content={this.state.locations}
                    controlFunc={this.handleChange}
                    placeholder={'Locations'} />
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

export default Forms;