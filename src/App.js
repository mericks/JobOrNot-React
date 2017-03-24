import React, { Component } from 'react';
// import './App.css';

const SignedInNav = () => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo' /></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li>Profile</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  )
}

const SignedOutNav = () => {
  return (
    <nav>
      <ul>
        <li><img src="http://placehold.it/50x50" alt='logo'/></li>
        <li>JobOrNot</li>
        <li>How It Works</li>
        <li>Sign In</li>
      </ul>
    </nav>
  )
}

const Nav = (props) => {
  if(props.signedIn) return (<SignedInNav />)
  else if (!props.signedIn) return (<SignedOutNav />)
};

const Welcome = () => {
  return (
    <div>
      <p>Welcome message from JobOrNot</p>
    </div>
  )
}

const RecruiterIntro = () => {
  return (
    <div>
      <p>
        Recruiter instructions here
      </p>
      <button>button to sign up</button>
    </div>
  )
}

const SeekerIntro = () => {
  return (
    <div>
      <p>
        Seeker instructions here
      </p>
      <button>button to sign up</button>
    </div>
  )
}

const Footer = () => {
  return (
    <ul>
      <li>&copy; Copyright Team Banana/Guava 2017</li>
      <li>About</li>
    </ul>
  )
}

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
        <Nav signedIn={this.state.signedIn}/>
        <button onClick={this.onSignIn}>sign in/out</button>
        <Welcome />
        <RecruiterIntro />
        <SeekerIntro />
        <Footer />
      </div>
    );
  }
}

export default App;
