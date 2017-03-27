import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      token: 'PRESENT FOR BACKEND DEVS', 
      recruiter: {},
      talent: {},
    }
    this.onSignIn = this.onSignIn.bind(this);
    this.onRecruiterSignUp = this.onRecruiterSignUp.bind(this);
    this.onTalentSignUp = this.onTalentSignUp.bind(this);
  }

  onSignIn = () => {
    if(!this.state.signedIn) this.setState({ signedIn: true})
    else this.setState({ signedIn: false})
  }

  onRecruiterSignUp = (formPayload) => {
    this.setState({ recruiter: formPayload, signedIn: true});
    // direct to recruiter profile page
  }

  onTalentSignUp = (formPayload) => {
    this.setState({ talent: formPayload, signedIn: true});
    // direct to talent profile page
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => <Home {...props} signedIn={this.state.signedIn} onSignIn={this.onSignIn}/>} />
          <Route exact path='/recruitersignup' render={(props) => <RecruiterForm {...props} signUp={this.onRecruiterSignUp} signedIn={this.state.signedIn} button={<button onClick={this.onSignIn}>sign in/out</button>} />  } />
          <Route exact path='/talentsignup' render={(props) => <TalentForm {...props} signUp={this.onTalentSignUp} signedIn={this.state.signedIn} button={<button onClick={this.onSignIn}>sign in/out</button>} />  } />
          <Route exact path='/signin' render={(props) => <SignInForm {...props} signedIn={this.state.signedIn} button={<button onClick={this.onSignIn}>sign in/out</button>} />  } />
        </div>
      </Router>
    );
  }
}

export default App;
