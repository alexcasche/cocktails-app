import React from 'react';

import { Button } from 'components/atoms/Buttons';
import Hamburger from './Hamburger';

const MenuButtonStyled = Button.extend `
  background: none;
  position: absolute;
  height: 60px;
  right: 12px;
  &:hover {
    box-shadow: none;
    span {
      opacity: .5;
    }
  }
  ${props => props.theme.breakPointMD} {
    height: 80px;
  }
`;

const MenuButton = ({toggleNav, showMainNav}) => {
  return (
    <MenuButtonStyled onClick={toggleNav}>
      <Hamburger className={showMainNav ? ' open': ''} />
    </MenuButtonStyled>
  );
}

export default MenuButton;