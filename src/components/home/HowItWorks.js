import React from 'react';
import Nav from '../navbar/Nav';

const HowItWorks = () => {
    return (
        <div>
            <Nav />
            <h1>How Job Or Not Works</h1> <hr/>
            <h2>Recruiters and Hiring Managers</h2>
            <h3><i>Finding the hottest talent has never been simpler!</i></h3>
            <p>
                <ol>
                    <li>Create an account</li> 
                    <li>Start a talent search! Make a resume 
                    collection by providing the job title, company, and skills 
                    required for the position.</li> 
                    <li>Go to the resume viewer and quickly
                    move resumes into the collection, click RIGHT for <strong>job</strong>, LEFT 
                    for <strong>not</strong>.</li> 
                    <li>Wash, rinse, repeat as neccessary!</li>
                    <li>Your profile page holds on to your collection of hot resumes for you to ponder at your leisure.</li>
                </ol>
                <strong>Happy Hunting!</strong>
            </p>
            <h2>Talent</h2>
            <h3><i>Getting your resumes seen is now a cinch!</i></h3>
            <p>
                <ol>
                    <li>It's easy! Seriously. Sign up and upload your most current, most sexy <strong>ONE PAGE</strong> resume in .pdf format.</li>
                    <li> Add to your profile a short list of marketable skills, using bite-sized chunks like "management" or "JavaScript" that match your resume. (<i>Pro-tip: Recruiters will be searching for resumes 
                based on skill sets.</i>)</li>
                <li>Back on the profile page, track the 
                number of times your resume was voted up by recruiters and make any updates to the account.</li>
                <li>That's it!</li>
                </ol>
                <strong>Good Luck!</strong>
            </p>
        </div>
    );
};

export default HowItWorks;
