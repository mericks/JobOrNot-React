import React from 'react';
import { Link } from 'react-router-dom';

const TalentIntro = () => (
    <div id='talent'>
      <div className='container'>
        <div className='row'>
          <div className='four columns'>
            <Link to={'/talentsignup'}><button>Sign me up!</button></Link>
          </div>
          <div className='eight columns'>
            <h3>Talent. You know who you are!</h3>
            <p>Load your resume once. Gain access to recuriters looking for talent just like you.</p>
            <p>We put an end to the black box of a typical job search.</p>
            <p>Gain insight on how effective your resume is performing.</p>
            <p>We deliver stats on the number of times your resume has been viewed vs saved.</p>
          </div>
        </div>
      </div>
    </div>
);

export default TalentIntro;
