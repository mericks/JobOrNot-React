import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { sendLogIn } from '../../actions/auth-actions';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',   // TODO: DON'T BRING PW BACK IN THE STATE. HANDLE IN BACKEND
        };

        this.handleFormSignIn = this.handleFormSignIn.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSignIn(e) {
        e.preventDefault();

        const formPayload = {
            username: this.state.username,
            password: this.state.password,
        };

        this.props.signIn({ method: 'POST', path: '/signin', body: formPayload })
        .then((action) => {
            if (action.type !== 'ITEMS_HAS_ERRORED') {
                // this.handleFormClear(e);
                // this.props.history.push('/profile');
            } else alert('Correct username and password must be provided');
        })
        .catch(() => {
            this.handleFormClear(e);
            this.props.history.push('/profile');
        });
    }

    handleFormClear(e) {
        // e.preventDefault();
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
                <div className='container topComponent'>
                    <div className='row'>
                                <form onSubmit={this.handleFormSignIn}>
                                    <h3 className='headline'>Sign in</h3>
                                    <SingleInput 
                                        title={'User Name'}
                                        name={'username'}
                                        inputType={'text'}
                                        content={this.state.username}
                                        controlFunc={this.handleChange}
                                        placeholder={'Select a User Name'} />
                                    <SingleInput 
                                        title={'Password'}
                                        name={'password'}
                                        inputType={'password'}
                                        content={this.state.password}
                                        controlFunc={this.handleChange}
                                        placeholder={'Select a Password'} />
                                    <input 
                                        color='baff29'
                                        type='submit'
                                        value='submit'/>
                                    <br />
                                    <button                         
                                        type='button'
                                        onClick={this.handleFormClear}
                                    >
                                        Clear Form
                                    </button>
                                </form>
                </div>
            </div>
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
    signIn: React.PropTypes.func,
    history: React.PropTypes.any
};
