import React from 'react';
import styled from 'styled-components';

import BaseWrapper from 'components/atoms/wrappers/BaseWrapper';
import CollapseWrapper from 'components/atoms/wrappers/CollapseWrapper';

import NavLink from 'components/atoms/links/NavLink';

import BrandLogo from 'components/atoms/logos/BrandLogo';

import PrimaryNav from 'components/molecules/navs/PrimaryNav';
import AccountNav from 'components/molecules/navs/AccountNav';
import ShareNav from 'components/molecules/navs/ShareNav';
import MobileNav from 'components/molecules/navs/MobileNav';


const NavBarStyled = styled.div `
  display: flex;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #181a34 0%, #313234 100%);
  z-index: 888;
  img {
    height: 30px;
    width: auto;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  ${props => props.theme.breakPointLG} {
    img {
      position: relative;
      left: auto;
      transform: none;
    }
  }
`;

const NavBar = (props) => {
  return (
    <NavBarStyled className="NavBar">
      <BaseWrapper>
        <NavLink to="/">
          <BrandLogo />
        </NavLink>
        <CollapseWrapper left id="Nav_Collapse">
          <PrimaryNav />
          <AccountNav { ...props } />
          <ShareNav />
        </CollapseWrapper>
        <MobileNav { ...props } />
      </BaseWrapper>
    </NavBarStyled>
  );
}

export default NavBar;