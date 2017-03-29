import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';
import Profile from './components/profile/Profile';

function App() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/recruitersignup' component={RecruiterForm} />
          <Route exact path='/talentsignup' component={TalentForm} />
          <Route exact path='/signin' component={SignInForm} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </Router>
    );
}

export default App;
