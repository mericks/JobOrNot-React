import React from 'react';
import { Link } from 'react-router-dom';

const RecruiterIntro = () => (
    <div>
      <h2>Recruiters and hiring managers</h2>
      <p>
        Blaze through resumes of qualified talent at the click of a button. 
        Set up an account, enter up to three jobs to select for, and click away. 
        Move right to keep resumes for a job, left to filter them out. Go back to 
        the profile page to see the resume collections for individual postings and 
        contact the candidates for hire!
      </p>
      <Link to={'/recruitersignup'}><button>button to sign up</button></Link>
    </div>
);

export default RecruiterIntro;
