import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/home/Home';

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
        <div>
          <Home signedIn={this.state.signedIn} onSignIn={this.onSignIn}/>
        </div>
      </Router>
    );
  }
}

export default App;
