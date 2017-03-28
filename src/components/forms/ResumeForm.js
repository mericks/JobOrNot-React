import React, { Component } from 'react';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import { sendSignUp } from '../../actions/auth-actions';
import UploadFiles from './UploadFiles';

class ResumeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: '',
        };

        this.handleResumeUpload = this.handleResumeUpload.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleResumeUpload(e) {
        e.preventDefault();
        console.log('props: ', this.props);
        const formPayload = {
            myResume: this.props.resume,
        };

        this.props.signUp({ method: 'PATCH', path: '/changeAccountInfo', body: formPayload });
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
                <Nav />
                <form onSubmit={this.handleResumeUpload}>
                    <h1>THIS FORM UPLOADS THE USER RESUME</h1>
                    <UploadFiles />
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
