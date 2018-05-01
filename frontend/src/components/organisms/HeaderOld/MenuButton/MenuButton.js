import React from 'react';

import { Button } from 'components/atoms/Buttons';
import Hamburger from './Hamburger';

const MenuButtonStyled = Button.extend `
  background: none;
  position: absolute;
  height: 100%;
  right: 12px;
  &:hover {
    box-shadow: none;
    span {
      opacity: .5;
    }
  }
`;

const MenuButton = ({toggleNav, showNav}) => {
  return (
    <MenuButtonStyled onClick={toggleNav}>
      <Hamburger className={showNav ? ' open': ''} />
    </MenuButtonStyled>
  );
}

export default MenuButton;