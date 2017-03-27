import React from 'react';
import { Link, Route } from 'react-router-dom';
import TalentForm from '../forms/TalentForm';

const TalentIntro = () => (
  <div>
    <p>
      Talent instructions here
    </p>
    <Link to={`/talentsignup`}><button>button to sign up</button></Link>

    <Route path={`/talentsignup`} component={TalentForm} />
  </div>
)

export default TalentIntro;