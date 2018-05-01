import React from 'react';

import { NavLink } from 'components/atoms/Links';
import { MenuStyled as MenuBase } from './MenuList';

const MenuStyled = MenuBase.withComponent('nav');

const MenuNav = ({links, ...rest}) => {
  const menuLinks = links.map((link) => {
    return (
      <NavLink key={link.name} exact to={link.url}><span>{link.name}</span></NavLink>
    )
  });
  return (
    <MenuStyled className="Menu" {...rest}>
      { menuLinks }
    </MenuStyled>
  );
}

export default MenuNav;