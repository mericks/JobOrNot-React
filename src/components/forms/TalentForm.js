import React, { Component } from 'react';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import { sendSignUp } from '../../actions/auth-actions';
import UploadFiles from './UploadFiles';

class TalentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
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

    handleFormSignUp(e) {
        e.preventDefault();
        console.log('props: ', this.props);
        const formPayload = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            myResume: this.props.resume._id,
            skills: this.state.skills,
            locations: this.state.locations
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
            resume: '',
            skills: '',
            locations: '',
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
                    <h1>THIS FORM SIGNS UP TALENT</h1>
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
                    <UploadFiles />
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
            </div>
        );
    };
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        resume: state.uploads
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signUp: (options) => dispatch(sendSignUp(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TalentForm);

TalentForm.propTypes = {
    signUp: React.PropTypes.func,
    resume: React.PropTypes.object
};
