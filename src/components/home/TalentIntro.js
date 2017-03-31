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
            <p>We've put an end to the time-consuming, black box job search.</p>
            <p>Load your resume once. Access recruiters looking for talented people you.</p>
            <p>Bonus! You'll gain new insight on the effectiveness of your resume as we deliver stats on times viewed vs times saved.</p>
          </div>
        </div>
      </div>
    </div>
);

export default TalentIntro;
