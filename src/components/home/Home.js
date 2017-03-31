import React from 'react';
import Nav from '../navbar/Nav';
import Welcome from './Welcome';
import RecruiterIntro from './RecruiterIntro';
import TalentIntro from './TalentIntro';
import WelcomeBuffer from './WelcomeBuffer';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Nav />
            <Welcome />
            <RecruiterIntro />
            <WelcomeBuffer />>
            <TalentIntro />
            <Footer />
        </div> 
    );
};

export default Home;
