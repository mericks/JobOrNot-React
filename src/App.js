import React, { Component } from 'react';
import UploadFiles from './components/UploadFiles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
        };
        this.onSignIn = this.onSignIn.bind(this);
    }

  onSignIn = () => {
    if(!this.state.signedIn) this.setState({ signedIn: true})
    else this.setState({ signedIn: false})
  }

  render() {
    return (
      <Router>
        <div>
          <UploadFiles />
          <Route exact path='/' render={(props)=> <Home {...props} signedIn={this.state.signedIn} onSignIn={this.onSignIn}/>} />
          <Route exact path='/recruitersignup' component={RecruiterForm} />
          <Route exact path='/talentsignup' component={TalentForm} />
        </div>
      </Router>
    );
  }
}

export default App;
