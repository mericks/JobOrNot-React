import React, { Component } from 'react';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };

        this.handleFormSignIn = this.handleFormSignIn.bind(this);
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

    handleFormSignIn(e) {
        e.preventDefault();

        const formPayload = {
            userName: this.state.userName,
            password: this.state.password,
        };

        console.log('to be sent to DB - formPayload:', formPayload);
        // this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            userName: '',
            password: '',
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
 
    render() {
        return (
            <div>
                <Nav button={this.props.button}/>
                <form onSubmit={this.handleFormSignIn}>
                    <h1>THIS IS THE SIGN IN FORM</h1>
                    <SingleInput 
                        title={'User Name'}
                        name={'userName'}
                        inputType={'text'}
                        content={this.state.userName}
                        controlFunc={this.handleChange}
                        placeholder={'Select a User Name'} />
                    <SingleInput 
                        title={'Password'}
                        name={'password'}
                        inputType={'text'}
                        content={this.state.password}
                        controlFunc={this.handleChange}
                        placeholder={'Select a Password'} />
                    <button onClick={this.handleFormClear}>
                        Clear Form
                    </button>
                    <input 
                        type='submit'
                        value='submit'/>
                </form>
            </div>
        )
    };
}

export default SignInForm;
