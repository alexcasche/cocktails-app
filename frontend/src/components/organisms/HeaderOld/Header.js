import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from 'components/atoms/Wrapper';
import { NavLink } from 'components/atoms/Links';
import Logo from 'components/atoms/Logo';
import SearchBox from './SearchBox/SearchBox';
import AccountLink from './AccountLink/AccountLink';
import MenuButton from './MenuButton/MenuButton';
import PrimaryNav from './PrimaryNav/PrimaryNav';

const HeaderStyled = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to bottom, #181a34 0%, #313234 100%);
  z-index: 888;
  .Logo {
    height: 32px;
    width: auto;
    position: relative;
    top: 13px;
  }
  ${props => props.theme.breakPointMD} {
    height: 80px;
    .Logo {
      height: 34px;
      top: 23px;
    }
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    }
  }

  toggleNav = (e) => {
    this.setState((prevState) => {
      return { showNav: !prevState.showNav }
    });
  }

  render() {

    return(
      <HeaderStyled>
        <PrimaryNav user={this.props.user} showNav={this.state.showNav} />
        <Wrapper>
          <NavLink to="/">
            <Logo className="Logo" />
          </NavLink>
          <SearchBox />
          <AccountLink user={this.props.user} events={this.props.events} />
          <MenuButton toggleNav={this.toggleNav} showNav={this.state.showNav} />
        </Wrapper>
        {this.props.children}
      </HeaderStyled>
    );
  }
}

export default Header;