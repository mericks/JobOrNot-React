import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import { sendSkills } from '../../actions/upload-actions';

class ResumeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            location: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.handleFormUpdate = this.handleFormUpdate.bind(this);

        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log('props: ', this.props);
        const formPayload = {
            skills: this.state.skills,
            location: this.state.location,
            user: this.props.userId,
            resume: this.props.resumeId
        };

        this.props.sendSkills({ method: 'PATCH', path: '/myResume', body: formPayload });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            skills: [],
            location: ''
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>THIS FORM SENDS SKILLS AND LOCATION</h1>
                    <SingleInput 
                        title={'Skills'}
                        name={'skills'}
                        inputType={'text'}
                        content={this.state.skills}
                        controlFunc={this.handleChange}
                        placeholder={'Top Skills'} />
                    <SingleInput 
                        title={'Location'}
                        name={'location'}
                        inputType={'text'}
                        content={this.state.locations}
                        controlFunc={this.handleChange}
                        placeholder={'Your Location'} />
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

ResumeForm.propTypes = {
    userId: PropTypes.string,
    resumeId: PropTypes.string,
    sendSkills: PropTypes.func
};

function mapStateToProps(state) {
    return {
        userId: state.resume.user,
        resumeId: state.resume._id
    };
}

function mapDisptachToProps(dispatch) {
    return {
        sendSkills: (options) => dispatch(sendSkills(options))
    };
}

export default connect(mapStateToProps, mapDisptachToProps)(ResumeForm);
