import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PDF from 'react-pdfjs';

function FetchResume(props) {
    return (
        <div>
            <PDF file={`/resume/${props.resumeId}?accessToken=${props.token}`} />
        </div>
    );
}

class ReviewResume extends React.Component {
    render() {
        return (
            <div>
                <FetchResume resumeId={this.props.resumeId} token={this.props.token} />
                <button><Link to='/profile'>Back to Profile</Link></button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        resumeId: state.viewResume.resumeToView,
        token: state.userAuth.token
    };
}

export default connect(mapStateToProps)(ReviewResume);

ReviewResume.propTypes = {
    token: React.PropTypes.string,
    resumeId: React.PropTypes.string
};

FetchResume.propTypes = {
    token: React.PropTypes.string,
    resumeId: React.PropTypes.string
};
