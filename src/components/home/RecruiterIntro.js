import React from 'react';
import { Link, Route } from 'react-router-dom';
import RecruiterForm from '../forms/RecruiterForm';

const RecruiterIntro = () => (
  <div>
    <p>
      Recruiter instructions here
    </p>
    <Link to={`/recruitersignup`}><button>button to sign up</button></Link>

    <Route path={`/recruitersignup`} component={RecruiterForm} />
  </div>
)

export default RecruiterIntro;