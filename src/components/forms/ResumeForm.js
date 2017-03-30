import React from 'react';
import SingleInput from './SingleInput';
import Nav from '../navbar/Nav';
import { connect } from 'react-redux';
import UploadFiles from './UploadFiles';
import { sendSkills } from '../../actions/upload-actions';

class ResumeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: '',
            locations: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const skills = this.state.skills.split(' ');

        console.log('skills: ', skills);

        const formPayload = {
            skills: skills,
            userId: this.props.userId,
            resume: this.props.resumeId,
            location: this.state.location
        };

        console.log('payload: ', formPayload);
        this.props.sendSkills({ method: 'PATCH', path: `/myResume/${this.props.resumeId}`, body: formPayload, token: this.props.token });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            skills: [],
            locations: ''
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>THIS FORM ADD TALENT RESUME</h1>
                <UploadFiles />
                <form onSubmit={this.handleFormSubmit}>
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
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
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

export default connect(mapStateToProps, mapDisptachToProps)(ResumeForm);

ResumeForm.propTypes = {
    uploads: React.PropTypes.object,
    resumeId: React.PropTypes.string,
    userId: React.PropTypes.string,
    sendSkills: React.PropTypes.func,
    token: React.PropTypes.string
};
