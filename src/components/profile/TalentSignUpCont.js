import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ResumeForm from '../forms/ResumeForm';
import UploadFiles from '../forms/UploadFiles';
import Nav from '../navbar/Nav';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
        resume: state.userAuth.resume
    };
};

const TalentSignUpCont = (props) => {

    return (
        <div>
            <Nav />
            <div className='container topComponent'>
                <div className='row'>
                    <h2 className='headline centerText'>Almost Done!</h2>
                    <h4 className='centerText hand'>Upload your resume (pdf!) first. Then tell us about your skills.</h4>
                </div>
                <div className='row'>
                    <div className='four columns offset-by-two'>
                        <UploadFiles /> {/*resume upload*/} 
                    </div>
                    <div className='five columns offset-by-one'>
                        <ResumeForm /> {/*skills*/}
                    </div>
                </div>
            </div>
        </div>
    );
};


TalentSignUpCont.propTypes = {
    user: PropTypes.object
};

export default connect(mapStateToProps)(TalentSignUpCont);
