import React, { Component } from 'react';
import styled from 'styled-components';

import TopNav from './TopNav/TopNav';
import MainNav from './MainNav/MainNav';
import FilterNav from './FilterNav/FilterNav';
import SubNav from './SubNav/SubNav';

const HeaderStyled = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 888;
  ${props => props.theme.breakPointMD} {
    height: 80px;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMainNav: false,
      showFilterNav: false
    }
  }
  toggleNav = (activeNav) => {
    this.setState((prevState) => {
      if(activeNav === "main") {
        return { showMainNav: !prevState.showMainNav }
      } else if (activeNav === "filter") {
        return { showFilterNav: !prevState.showFilterNav}
      }
    });
  }

  render() {
    return(
      <HeaderStyled className="Header">
        <TopNav {...this.props} {...this.state} toggleNav={this.toggleNav} />
        <MainNav user={this.props.user} showMainNav={this.state.showMainNav} />
        <FilterNav showFilterNav={this.state.showFilterNav} />
        <SubNav route={this.props.route} />
      </HeaderStyled>
    );
  }
}

export default Header;