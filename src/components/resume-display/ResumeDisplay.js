import React from 'react';
import { connect } from 'react-redux';
import PDF from 'react-pdfjs';
import { resumeFetchData, resumeFetchFile } from '../../actions/ResumeDisplay-actions';

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

// function itterateResumes(props) {
//     let index = 0;

// }


class ResumeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResume: 0
        };
        this.handleVoteDown = this.handleVoteDown.bind(this);
        this.handleVoteUp = this.handleVoteUp.bind(this);
    }

    componentWillMount() {
        this.props.fetchData({ method: 'GET', path: '/resumes?skills[]=typing', token: this.props.token });
    }

    handleVoteUp(e) {
        e.preventDefault();

        const payLoad = {
            likedResumes: this.props.resumes[this.state.currentResume],
            likeBy: this.props.user._id
        };

        this.props.voteUp({ method: 'PATCH', path: `/resume/${this.props.user._id}`, body: payLoad, token: this.props.token });
        
        this.setState({
            currentResume: this.state.currentResume + 1
        });
    }

    handleVoteDown(e) {
        e.preventDefault();

        this.setState({
            currentResume: this.state.currentResume + 1
        });
    }

    render() {
        return (
            <div>
/* original on master before merge conflict
                <GetResume 
                    resume={this.props.resumes[this.state.currentResume]} 
                    token={this.props.token} />
                <button onClick={this.handleVoteUp}>Yes</button>
                <button onClick={this.handleVoteDown}>No</button>
original on master before merge conflict*/
                <GetResume resume={this.props.resumes[0]} fetch={this.props.fetchFile} token={this.props.token} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        resumes: state.displayResumes,
        token: state.userAuth.token,
        user: state.userAuth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(resumeFetchData(options)),
        fetchFile: (options) => dispatch(resumeFetchFile(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeDisplay);

ResumeDisplay.propTypes = {
    fetchData: React.PropTypes.func,
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
