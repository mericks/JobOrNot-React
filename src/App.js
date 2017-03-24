import React, { Component } from 'react';
// import './App.css';

import SignedInNav from './components/navbar/SignedInNav';
import SignedOutNav from './components/navbar/SignedOutNav';
import Nav from './components/navbar/Nav';
import Welcome from './components/home/Welcome';
import RecruiterIntro from './components/home/RecruiterIntro';
import SeekerIntro from './components/home/SeekerIntro';
import Footer from './components/footer';

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
      <div>
        <Nav signedIn={this.state.signedIn} button={<button onClick={this.onSignIn}>sign in/out</button>}/>
        {/*<button onClick={this.onSignIn}>sign in/out</button>*/}
        <Welcome />
        <RecruiterIntro />
        <SeekerIntro />
        <Footer />
      </div>
    );
  }
}

export default App;
