import React from 'react';
import { Link } from 'react-router-dom';

const TalentIntro = () => (
    <div id='talent'>
      <div className='container'>
        <div className='row'>
          <div className='four columns'>
            <br />
            <br />
            <br />
            <br />
            <Link to={'/talentsignup'}><button className='signUpButton'>Sign me up!</button></Link>
          </div>
          <div className='eight columns'>
            <h3 className='headline'>Talent. You know who you are!</h3>
            <p>We put an end to the black box of a typical job search.</p>
            <p>Load your resume once. Access recruiters looking for talent like you.</p>
            <p>You'll Gain new insight on how effective your resume is performing as deliver stats on the number of times your resume has been viewed vs saved.</p>
          </div>
        </div>
      </div>
    </div>
);

export default TalentIntro;
