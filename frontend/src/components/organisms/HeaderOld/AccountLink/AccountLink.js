import React, { Component } from 'react';

import LoginButton from './LoginButton';
import ProfileLink from './ProfileLink';

class AccountLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.user
    }
  }
  render() {
    if(!this.state.loggedIn) {
      return (<LoginButton onClick={this.props.login}/>)
    }
    return (<ProfileLink user={this.props.user}/>)
  }
}

export default AccountLink;
