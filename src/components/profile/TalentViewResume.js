import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { Link } from 'react-router-dom';
import { resumeToViewSuccess } from '../../actions/ResumeDisplay-actions';

class TalentViewResume extends React.Component {
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
                <h4>Resume</h4>
                <button onClick={this.handleViewResume}>
                    <Link to='/review-resume' id={this.props.profileStats._id}>
                        Resume {this.props.profileStats.name}
                    </Link>
                </button>
                <hr />
                <h4>Skills</h4>
                {this.props.profileStats.skills}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userAuth.user,
        profileStats: state.profileStats,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        resumeToView: (resume) => dispatch(resumeToViewSuccess(resume))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TalentViewResume);

TalentViewResume.propTypes = {
    user: PropTypes.object,
    profileStats: PropTypes.object,
    resumeToView: PropTypes.func
};
