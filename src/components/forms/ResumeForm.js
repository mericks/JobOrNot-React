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
            skills: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDevault();

        const formPayload = {
            skills: this.state.skills,
            userId: this.props.userId,
            resume: this.props.resumeId
        };

        this.sendSkills({ method: 'PATCH', path: '/myResume', body: formPayload });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDevault();
        this.setState({
            skills: []
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
                <UploadFiles />
                <form onSubmit={this.handleFormSubmit}>
                    <h1>THIS FORM ADD TALENT RESUME</h1>
                    <SingleInput 
                        title={'Skills'}
                        name={'skills'}
                        inputType={'text'}
                        content={this.state.skills}
                        controlFunc={this.handleChange}
                        placeholder={'Top Skills'} />
                    <button onClick={this.handleFormClear}>
                        Clear Form
                    </button>
                    <input
                        type='submit'
                        value='submit' />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userAuth.user._id,
        resumeId: state.resume_id
    };
}

function mapDisptachToProps(dispatch) {
    return {
        sendSkills: (options) => dispatch(sendSkills(options))
    };
}

export default connect(mapStateToProps, mapDisptachToProps)(ResumeForm);

ResumeForm.propTypes = {
    resumeId: React.PropTypes.string,
    userId: React.PropTypes.string
};
