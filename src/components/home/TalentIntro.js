import React from 'react';
import { Link } from 'react-router-dom';

const TalentIntro = () => (
  <div>
    <h2>Talent</h2>
    <p>
      Sign up and get a job! Upload your resume and join the JobOrNot 
      pool of highly qualified talent. Track stats on the profile page and wait 
      for the job offers to roll in!
    </p>
    <Link to={'/talentsignup'}><button>button to sign up</button></Link>
  </div>
);

export default TalentIntro;
