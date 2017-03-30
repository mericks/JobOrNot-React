import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';
import Profile from './components/profile/Profile';
import UploadFiles from './components/forms/UploadFiles';
import '../styles/css/bootstrap-theme.css';
import '../styles/css/bootstrap.css';

function App() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/recruitersignup' component={RecruiterForm} />
          <Route exact path='/talentsignup' component={TalentForm} />
          <Route exact path='/signin' component={SignInForm} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/resumesubmit' component={UploadFiles} />
        </div>
      </Router>
    );
}

export default App;
