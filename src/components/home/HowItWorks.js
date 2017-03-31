import React from 'react';
import Nav from '../navbar/Nav';

const HowItWorks = () => (
    <div>
        <Nav />
        <div className='container topComponent'>
            <div className='row'>
                <h2 className='headline centerText'>How Job Or Not Works</h2> <hr/>
            </div>
            <div className='row'>
                <div className='six columns'>
                    <h2 className='headline'>Recruiters</h2><br />
                    <h5>Finding hot talent has never been simpler.</h5>
                    <p>
                        <ol>
                            <li>Create an account.</li> 
                            <li>Start a talent search! Make a resume 
                            collection by providing the job title, hiring company, and skills 
                            required for the position.</li> 
                            <li>View resumes that match the required skills and quickly
                            save those you like into a collection. Click RIGHT for <strong>job</strong>, LEFT 
                            for <strong>not</strong>.</li> 
                            <li>Wash, rinse, repeat for new roles. It's that simple!</li>
                            <li>Ponder the best resumes at your leisure. We save a collection of your favorites, accessible on your profile page.</li>
                        </ol>
                        <h5 className='hand'>Happy Hunting!</h5>
                    </p>
                </div>
                <div className='six columns'>
                    <h2 className='headline'>Talent</h2><br />
                    <h5>Getting your resume seen is now a cinch.</h5>
                    <p>
                        <ol>
                            <li>Sign up and load your sexiest <strong>ONE PAGE</strong> resume in .pdf format.</li>
                            <li>Add to your profile a short list of marketable skills, using bite-sized chunks like 'management' or 'JavaScript.'</li>
                            <li>Return to your profile page to track your resume's performance. Compare times viewed to times saved by recruiters.</li>
                            <li>Make updates to your resume or list of top skills to improve performance.</li>
                            <li>That's it. Woot!</li>
                        </ol>
                        <h5 className='hand'>You got this.</h5>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default HowItWorks;
