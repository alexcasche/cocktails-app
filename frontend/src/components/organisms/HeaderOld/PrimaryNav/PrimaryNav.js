import React from 'react';

import styled from 'styled-components';

const PrimaryNavStyled = styled.div `
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
  padding: 0;
  height: 0;
  background: ${props => props.theme.brandGrey};
  border: 1px solid rgba(255,255,255,.05);
  transition: height .5s ease-in-out, padding .5s ease-in-out;
  &.open {
    padding: 40px 0;
    height: calc(100vh - 80px);
  }
`;

const PrimaryNav = ({showNav, user}) => {
  return (
    <PrimaryNavStyled className={showNav ? ' open': ''} />
  );
}

export default PrimaryNav;