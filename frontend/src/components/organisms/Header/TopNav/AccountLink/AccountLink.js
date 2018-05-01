import React, { Component } from 'react';

import LoginButton from './LoginButton';
import ProfileLink from './ProfileLink';

class AccountLink extends Component {
  render() {
    if(!this.props.user) {
      return (<LoginButton onClick={this.props.login}/>)
    }
    return (<ProfileLink user={this.props.user}/>)
  }
}

export default AccountLink;
