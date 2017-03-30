import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';
import ResumeDisplay from './components/resume-display/ResumeDisplay';
import ResumeForm from './components/forms/ResumeForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: 'PRESENT FOR BACKEND DEVS', 
            recruiter: {},
            talent: {},
        };
    }

    render() {
        return (
          <Router>
            <div>
              <Route exact path='/' component={Home} />
              <Route exact path='/recruitersignup' component={RecruiterForm} />
              <Route exact path='/talentsignup' component={TalentForm} />
              <Route exact path='/signin' component={SignInForm} />
              <Route exact path='/resume-display' component={ResumeDisplay} />
              <Route exact path='/resume-upload' component={ResumeForm} />
            </div>
          </Router>
        );
    }
  }

export default App;
