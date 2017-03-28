import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { sendLogIn } from '../../actions/auth-actions';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',   // TODO: DON'T BRING PW BACK IN THE STATE. HANDLE IN BACKEND
        };

        this.handleFormSignIn = this.handleFormSignIn.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSignIn(e) {
        e.preventDefault();

        const formPayload = {
            username: this.state.userName,
            password: this.state.password,
        };

        this.props.signIn({ method: 'POST', path: '/signin', body: formPayload });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            username: '',
            password: '',
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
                        inputType={'password'}
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
        );
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (options) => dispatch(sendLogIn(options))
    };
}

export default connect(null, mapDispatchToProps)(SignInForm);

SignInForm.propTypes = {
    button: React.PropTypes.element,
    signIn: React.PropTypes.func
};
