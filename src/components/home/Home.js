import React from 'react';

import Nav from '../navbar/Nav';
import Welcome from './Welcome';
import RecruiterIntro from './RecruiterIntro';
import TalentIntro from './TalentIntro';
import Footer from '../footer';

const Home = (props) => {
    return (
        <div>
            <Nav signedIn={props.signedIn} button={<button onClick={props.onSignIn}>sign in/out</button>}/>
            <Welcome />
            <RecruiterIntro />
            <TalentIntro />
            <Footer />
        </div> 
    )
}

export default Home;