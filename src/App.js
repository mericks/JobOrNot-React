import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Forms from './components/forms/Forms';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
    }
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn = () => {
    if(!this.state.signedIn) this.setState({ signedIn: true})
    else this.setState({ signedIn: false})
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' render={(props)=> <Home {...props} signedIn={this.state.signedIn} onSignIn={this.onSignIn}/>} />
            <Route exact path='/forms' render={(props) => <Forms {...props} />} />
          </Switch>
      </Router>
    );
  }
}

export default App;
