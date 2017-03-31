import React, { PropTypes } from 'react';

const TalentStats = (props) => (
    <div>
        <h4>Stats</h4>
        <p> VIEWS: 24</p>
        <p> SAVES: 7</p>
        <hr />
        <p>Hey, Liz, you have a 30% save rate.</p>
        <p>Not bad in the resume game.</p>
        <hr />
        <p>Want to tweek your resume to better illustrate your skills?</p>
        <p>Reupload when you're ready!</p>
    </div>
);

export default TalentStats;

TalentStats.propTypes = {
    user: PropTypes.object
};

/*import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

class TalentStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: '',
            timesViewed: '',
            timesLiked: '',
            likedBy: [],
            file: ''
        };
        // this.handlewhatever = this.handlewhatever.bind(this);
    }

    componentWillMount() {
        fetch('./myResume')
			.then(res => res.json())
			.then(data => {
                this.setState({
					username: data.username,
					user: data.user,
					timesViewed: data.timesViewed,
					timesLiked: data.timesLiked,
					likedBy: data.likedBy,
                    file: data.file
				});
            });
        }

    // handlewhaterver(e) {
    // }  

    render() {
        return (
            <div>
                <p>THIS IS TalentStats SECTION</p>
                <p>It was saved {this.state.timesLiked} times by recruiters actively hiring for these companies: {this.props.user.jobCompanyToFill} .</p>
            </div>
        );
    }  
}

export default connect(mapStateToProps)(TalentStats);

TalentStats.propTypes = {
    user: PropTypes.object
};*/
