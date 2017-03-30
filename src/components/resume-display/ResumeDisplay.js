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
    componentWillMount() {
        this.props.fetchData({ method: 'GET', path: '/resumes?skills[]=typing', token: this.props.token });
    }

    render() {
        return (
            <div>
                <GetResume resume={this.props.resumes[0]} fetch={this.props.fetchFile} token={this.props.token} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        resumes: state.displayResumes,
        token: state.userAuth.token
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
    fetchFile: React.PropTypes.func
};

GetResume.propTypes = {
    fetch: React.PropTypes.func,
    resume: React.PropTypes.object,
    token: React.PropTypes.string
};
