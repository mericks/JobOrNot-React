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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
    }
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn = () => {
    this.setState({ signedIn: true});
  }

  
  render() {

    return (
      <div>
        <Nav signedIn={this.state.signedIn}/>
        <button onClick={this.onSignIn}>sign in </button>
      </div>
    );
  }
}

export default App;
