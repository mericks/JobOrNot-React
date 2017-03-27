import React from 'react';
import { Link } from 'react-router-dom';

const TalentIntro = () => (
  <div>
    <p>
      Talent instructions here
    </p>
    <Link to={`/talentsignup`}><button>button to sign up</button></Link>
  </div>
)

export default TalentIntro;