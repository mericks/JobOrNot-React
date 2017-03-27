import React from 'react';
import { Link } from 'react-router-dom';

const TalentIntro = () => (
  <div>
    <h2>Job seekers</h2>
    <p>
      Sign up and get a job! Upload a resume in pdf format and join the JobOrNot 
      pool of highly qualified job seekers. Track stats on the profile page and wait 
      for the job offers to roll in!
    </p>
    <Link to={`/talentsignup`}><button>button to sign up</button></Link>
  </div>
)

export default TalentIntro;