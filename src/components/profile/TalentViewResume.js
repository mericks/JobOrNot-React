import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LizShawResume from '../../assets/LizShawResume.jpg';
import './Profile.css';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user   // or will it be state.user?
    };
};

const TalentViewResume = (props) => (
    <div>
        <h4>Resume</h4>
        <img className='talentViewResume' src={LizShawResume} alt={`${props.user.firstName} ${props.user.lastName}'s Resume`}/>
    </div>
);

export default connect(mapStateToProps)(TalentViewResume);

TalentViewResume.propTypes = {
    user: PropTypes.object
};
