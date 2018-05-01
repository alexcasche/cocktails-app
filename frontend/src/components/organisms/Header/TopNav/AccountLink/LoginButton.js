import React from 'react';
import { withTheme } from 'styled-components';

import { Button } from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';

const LoginButtonStyled = Button.extend `
  padding: 0;
  position: absolute;
  top: 21px;
  right: 100px;
  height: 38px;
  color: white;
  background: #1abc9e;
  border-radius: 50px;
  display: none;
  ${props => props.theme.breakPointMD} {
    font-size: 15px;
    width: 60px;
    display: block;
    span {
      display: none;
    }
  };
  ${props => props.theme.breakPointLG} {
    width: 140px;
    font-size: 13px;
    span {
      display: inline-block;
    }
    i {
      display: none;
    }
  };
`;

const LoginButton = ({theme, ...rest}) => {

  return (
    <LoginButtonStyled {...rest}>
      <span>Login / Signup</span>
      <FontAwesome icon={theme.loginIcon} />
    </LoginButtonStyled>
  );
}

export default withTheme(LoginButton);