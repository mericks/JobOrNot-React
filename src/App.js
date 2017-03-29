import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';

function App() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/recruitersignup' component={RecruiterForm} />
          <Route exact path='/talentsignup' component={TalentForm} />
          <Route exact path='/signin' component={SignInForm} />
        </div>
      </Router>
    );
}

export default App;
