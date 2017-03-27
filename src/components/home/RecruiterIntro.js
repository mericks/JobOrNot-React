import React from 'react';
import { Link } from 'react-router-dom';

const RecruiterIntro = () => (
  <div>
    <p>
      Recruiter instructions here
    </p>
    <Link to={`/recruitersignup`}><button>button to sign up</button></Link>
  </div>
)

export default RecruiterIntro;