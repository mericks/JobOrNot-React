import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { profileFetchData } from '../../actions/profile-actions';

function ShowStats(props) {
    if (!props.likedBy) {
        return null;
    }

    const timesViewed = props.timesViewed || 0;
    const likedBy = props.likedBy;
    let timesLiked = likedBy.length || 0;

    let saveRate = 0;
    if (timesViewed && timesLiked) {
        saveRate = timesLiked / timesViewed;
    }

    return (
        <div>
            <h4>Stats</h4>
            <p>VIEWS: {timesViewed} </p>
            <p> SAVES: {timesLiked}</p>
            <hr />
            <p>Hey, {props.firstName}, you have a {saveRate}% save rate.</p>
            <p>Not bad in the resume game.</p>
            <hr />
            <p> Want to tweak your resume to better illustrate your skills?</p>
            <p>Reupload when you are ready.</p>
        </div>
    );
}

class TalentStats extends Component {

    componentWillMount() {
        const userId = this.props.user._id;
        const token = this.props.token;

        this.props.fetchProfile({ method: 'GET', path: `/resume/${userId}/stats`, token: token });
    }

    render() {
        return (
            <ShowStats 
            timesViewed={this.props.profileStats.timesViewed}
            likedBy={this.props.profileStats.likedBy}
            firstName={this.props.user.firstName} />
        );
    }  
}

function mapStateToProps(state) {
    return {
        user: state.userAuth.user,
        profileStats: state.profileStats,
        token: state.userAuth.token
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchProfile: (options) => dispatch(profileFetchData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TalentStats);

TalentStats.propTypes = {
    user: PropTypes.object,
    fetchProfile: PropTypes.func,
    token: PropTypes.string,
    profileStats: PropTypes.object
};

ShowStats.propTypes = {
    timesViewed: PropTypes.number,
    likedBy: PropTypes.array,
    firstName: PropTypes.string
};
