import React from 'react';
import { connect } from 'react-redux';
import { resumeFetchData } from '../../actions/ResumeDisplay-actions';

// function getResume(props) {
//     let resumePDF = props.fetchData({ method: 'GET', path: `/resumes/${}`)
// }

class ResumeDisplay extends React.Component {
    componentWillMount() {
        this.props.fetchData({ method: 'GET', path: '/resumes', token: this.props.token });
    }

    render() {
        return (
            <div>
                <img src={this.props.resumes[0]} alt='Talent resume' />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        resumes: state.displayResumes,
        token: state.userAuth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(resumeFetchData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeDisplay);

ResumeDisplay.propTypes = {
    fetchData: React.PropTypes.func,
    resumes: React.PropTypes.array,
    token: React.PropTypes.string
};
