import React, { Component } from 'react';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import { sendSignUp } from '../../actions/auth-actions';
import UploadFiles from './UploadFiles';
import SingleInput from './SingleInput';

class ResumeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: '',
            locations: ''
        };
        this.handleResumeUpload = this.handleResumeUpload.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleResumeUpload(e) {
        e.preventDefault();
        console.log('props: ', this.props);
        const formPayload = {
            myResume: this.props.resume,
            skills: this.state.skills,
            locations: this.state.locations
        };

        this.props.signUp({ method: 'POST', path: '/myResume', body: formPayload });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            resume: ''
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleResumeUpload}>
                    <h1>THIS FORM FINISHES THE TALENT PROFILE</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);

ResumeForm.propTypes = {
    signUp: React.PropTypes.func,
    resume: React.PropTypes.object
};
