import React from 'react';
import { connect } from 'react-redux';
import PDF from 'react-pdfjs';
import { resumeFetchData, resumeVoteUp } from '../../actions/ResumeDisplay-actions';

function GetResume(props) {
    if (!props.resume) {
        return <div>No Resume </div>;
    }
    
    return (
        <div>
            <PDF file={`/resume/${props.resume._id}?accessToken=${props.token}`} />
        </div>
    );  
}

class ResumeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResumeIndex: 0,
        };
        this.handleVoteDown = this.handleVoteDown.bind(this);
        this.handleVoteUp = this.handleVoteUp.bind(this);
    }

    handleVoteUp(e) {
        e.preventDefault();
        let resumeCount = this.state.currentResumeIndex;
        let currentResumeId = this.props.resumes[this.state.currentResumeIndex]._id;
       // let currentResume = this.props.resumes[this.state.currentResumeIndex];

        const payLoad = {
            likedResumes: currentResumeId,
            likeBy: this.props.user._id
        };

        resumeCount++;

        this.setState({
            currentResumeIndex: resumeCount
        });

        this.props.voteUp({ method: 'PATCH', path: `/resume/${currentResumeId}`, body: payLoad, token: this.props.token });
    }

    handleVoteDown(e) {
        e.preventDefault();

        let resumeCount = this.state.currentResumeIndex;

        resumeCount++;
        this.setState({
            currentResumeIndex: resumeCount
        });
    }

    render() {
        return (
            <div>
                <GetResume 
                    resume={this.props.resumes[this.state.currentResumeIndex]} 
                    token={this.props.token} />
                <button onClick={this.handleVoteUp}>Yes</button>
                <button onClick={this.handleVoteDown}>No</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        resumes: state.displayResumes,
        token: state.userAuth.token,
        user: state.userAuth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(resumeFetchData(options)),
        voteUp: (options) => dispatch(resumeVoteUp(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeDisplay);

ResumeDisplay.propTypes = {
    resumes: React.PropTypes.array,
    token: React.PropTypes.string,
    user: React.PropTypes.object,
    voteUp: React.PropTypes.func
};

GetResume.propTypes = {
    fetch: React.PropTypes.func,
    resume: React.PropTypes.object,
    token: React.PropTypes.string
};
