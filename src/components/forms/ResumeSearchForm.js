import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import { Link } from 'react-router-dom';
import { resumeFetchData } from '../../actions/ResumeDisplay-actions';

class ResumeSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitleToFill: '', 
            jobCompanyToFill: '',
            // THESE TWO^^ ALSO HAPPEN IN RecruiterForm.js
            jobSkills: '',
        };

        this.handleFormResumeSearch = this.handleFormResumeSearch.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormResumeSearch(e) {
        e.preventDefault();

        const jobSkills = this.state.jobSkills.split(' ');
        console.log('jobSkills: ', jobSkills);

        this.props.fetchData({ method: 'GET', path: `/resumes?skills[]=${jobSkills}`, token: this.props.token });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            jobTitleToFill: '',
            jobCompanyToFill: '',
            jobSkills: '',
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    render() {
        return (
            <form onSubmit={this.handleFormResumeSearch}>
                <h4>Role</h4>
                <SingleInput
                    title={'What\'s the job?'}
                    name={'jobTitleToFill'}
                    inputType={'text'}
                    content={this.state.jobTitleToFill}
                    controlFunc={this.handleChange}
                    placeholder={'Job title'} /><br />
                <SingleInput
                    title={'Which company?'}
                    name={'jobCompanyToFill'}
                    inputType={'text'}
                    content={this.state.jobCompanyToFill}
                    controlFunc={this.handleChange}
                    placeholder={'Company name'} /><br />
                <SingleInput
                    title={'What skills?'}
                    name={'jobSkills'}
                    inputType={'text'}
                    content={this.state.jobSkills}
                    controlFunc={this.handleChange}
                    placeholder={'Job skills'} /><br />
                <button type='submit' onClick={this.handleFormResumeSearch}>
                    <Link to='/resume-display'>   
                        Review Resumes
                    </Link>
                </button><br />
                <button onClick={this.handleFormClear}>
                    Clear Form
                    </button>
            </form>
        );
    };
}

function mapStateToProps(state) {
    return {
        token: state.userAuth.token,
        user: state.userAuth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(resumeFetchData(options)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeSearchForm);

ResumeSearchForm.propTypes = {
    fetchData: React.PropTypes.func,
    token: React.PropTypes.string
};
