import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/atoms/Wrapper';

const MainNavStyled = styled.section `
  height: 0;
  width: 100%;
  background: ${props => props.theme.brandLightGrey};
  color: white;
  transition: height .5s ease-in-out, padding .5s ease-in-out;
  overflow: hidden;
  &.open {
    padding: 40px 0;
    height: 350px;
  }
`;

const MainNav = ({showMainNav, user}) => {
  return (
    <MainNavStyled className={showMainNav ? 'MainNav open': 'MainNav'}>
      <Wrapper>
        <div>HELLO</div>
      </Wrapper>
    </MainNavStyled>
  );
}

export default MainNav;