import React from 'react';
import styled from 'styled-components';

import HeaderContainer from 'containers/HeaderContainer';

const BaseLayoutStyled = styled.div `
  padding-top: 110px;
  background-color: #fafafa;
  min-height: 600px;
  ${props => props.theme.breakPointMD} {
    padding-top: 130px;
  }
`;

const BaseLayout = ({children}) => {
  return (
    <BaseLayoutStyled>
      <HeaderContainer />
      {children}
    </BaseLayoutStyled>
  )
}

export default BaseLayout;