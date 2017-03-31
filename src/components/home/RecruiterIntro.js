import React from 'react';
import { Link } from 'react-router-dom';

const RecruiterIntro = () => (
    <div id='recruiter'>
      <div className='container'>
        <div className='row'>
          <div className='eight columns'>
            <h3>Recruiters &amp; Hiring Managers</h3>
            <p>Blaze through resumes of qualified talent at the click of a button.</p> 
            <p>Set up an account, enter up to three jobs you're hiring for, and click away.</p>
            <p>Like a resume? Click right. Prefer to pass? Click left.</p>
            <p>View your saved resume collections on your profile page and contact candidates for hire.</p>
          </div>
          <div className='four columns signUpButton'>
            <Link to={'/recruitersignup'}><button>Let's Do It!</button></Link>
          </div>
        </div>
      </div>
    </div>
);

export default RecruiterIntro;
