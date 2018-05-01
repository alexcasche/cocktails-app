import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/atoms/Wrapper';
import { NavLink } from 'components/atoms/Links';
import Logo from 'components/atoms/Logo';
import SearchBox from './SearchBox/SearchBox';
import AccountLink from './AccountLink/AccountLink';
import MenuButton from './MenuButton/MenuButton';

const TopNavStyled = styled.section `
  width: 100%;
  height: 60px;
  background: linear-gradient(to bottom, #181a34 0%, #313234 100%);
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

const TopNav = ({...props}) => {

  return(
    <TopNavStyled className="TopNav">
      <Wrapper>
        <NavLink to="/">
          <Logo className="Logo" />
        </NavLink>
        <SearchBox toggleNav={() => props.toggleNav("filter")} />
        <AccountLink user={props.user} login={props.login} />
        <MenuButton showMainNav={props.showMainNav} toggleNav={() => props.toggleNav("main")} />
      </Wrapper>
    </TopNavStyled>
  );
}

export default TopNav;