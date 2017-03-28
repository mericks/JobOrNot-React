import React, { PropTypes } from 'react';

import Nav from '../navbar/Nav';
import Welcome from './Welcome';
import RecruiterIntro from './RecruiterIntro';
import TalentIntro from './TalentIntro';
import Footer from '../footer';

const Home = (props) => {
    return (
        <div>
            <Nav signedIn={props.signedIn} />
            <Welcome />
            <RecruiterIntro />
            <TalentIntro />
            <Footer />
        </div> 
    )
}

Home.propTypes = {
    signedIn: PropTypes.bool.isRequired,
};

export default Home;