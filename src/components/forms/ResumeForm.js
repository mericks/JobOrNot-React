import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import { sendSkills } from '../../actions/upload-actions';

class ResumeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: '',
            location: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const skills = this.state.skills.split(' ');

        const formPayload = {
            skills: skills,
            userId: this.props.userId,
            resume: this.props.resumeId,
            location: this.state.location
        };

        this.props.sendSkills({ method: 'PATCH', path: `/myResume/${this.props.resumeId}`, body: formPayload, token: this.props.token });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            skills: '',
            location: ''
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    render() {
        return (
            <div>
                <h4>Submit Top Skills</h4>
                <form onSubmit={this.handleFormSubmit}>
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
                        content={this.state.location}
                        controlFunc={this.handleChange}
                        placeholder={'Location'} />
                    <input type='submit' value='Submit' /><br />
                    <button onClick={this.handleFormClear}>
                        Clear Form
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userAuth.user._id,
        resumeId: state.uploads,
        token: state.userAuth.token
    };
}

function mapDisptachToProps(dispatch) {
    return {
        sendSkills: (options) => dispatch(sendSkills(options))
    };
}

ResumeForm.propTypes = {
    uploads: React.PropTypes.object,
    resumeId: React.PropTypes.string,
    userId: React.PropTypes.string,
    sendSkills: React.PropTypes.func,
    token: React.PropTypes.string
};

export default connect(mapStateToProps, mapDisptachToProps)(ResumeForm);
