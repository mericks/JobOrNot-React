import React from 'react';
import { connect } from 'react-redux';
import { resumeFetchData } from '../../actions/ResumeDisplay-actions';

// function GetResume(props) {
//     let resumePDF = props.fetchData({ method: 'GET', path: `/resumes/${props.resumes[0]}`});

//     return resumePDF;
// }

// function itterateResumes(props) {
//     let index = 0;

// }

class ResumeDisplay extends React.Component {
    componentWillMount() {
        console.log('hello');
        this.props.fetchData({ method: 'GET', path: '/resumes?skills[]=typing', token: this.props.token });
    }

    render() {
        let resumePDF = this.props.fetchData({ method: 'GET', path: `/resumes/${this.props.resumes[0]}` });
        console.log('props: ', this.props);
        return (
            <div>
                {resumePDF}
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
