import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resumeToViewSuccess } from '../../actions/ResumeDisplay-actions';

function DisplayResumeNames(props) {
    const resumeList = props.resumes.map((item, index) => {
        return (
        <li key={index}>
            <button onClick={props.controlFunc}>
                <Link to='/review-resume' id={item}>
                    Resume {index + 1}
                </Link>
            </button>
        </li>
        );
    });

    return (
        <ul>{resumeList}</ul>
    );
}

class RecruiterLikedResumes extends React.Component {
    constructor(props) {
        super(props);
        this.handleViewResume = this.handleViewResume.bind(this);
    }

    handleViewResume(e) {
        e.preventDefault();

        const payload = {
            resumeToView: e.target.id
        };

        this.props.resumeToView(payload);
    }

    render() {
        return (
            <div>
                <h5>Hot Talent Ready for Hire</h5>
                <DisplayResumeNames resumes={this.props.user.likedResumes} controlFunc={this.handleViewResume} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userAuth.user,
        token: state.userAuth.token
    };
};

function mapDispatchToProps(dispatch) {
    return {
        resumeToView: (resume) => dispatch(resumeToViewSuccess(resume))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterLikedResumes);

RecruiterLikedResumes.propTypes = {
    user: PropTypes.object,
    token: PropTypes.string,
    resumeToView: PropTypes.func
};

DisplayResumeNames.propTypes  = {
    token: PropTypes.string,
    resumes: PropTypes.array,
    controlFunc: PropTypes.func
};
