import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/atoms/Links';

const MenuStyled = styled.ul `
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row' };
  width: ${props => props.column ? '100%' : 'auto' };
  a {
    padding: ${props => props.column ? '1em 0' : '0 1em' };
    &.active {
      pointer-events: none;
    }
  }
`;

const MenuList = ({links, ...rest}) => {
  const menuLinks = links.map((link) => {
    return (
      <li>
        <Link key={link.name} to={link.url}>{link.name}</Link>
      </li>
    )
  });
  return (
    <MenuStyled className="Menu" {...rest}>
      { menuLinks }
    </MenuStyled>
  );
}

export { MenuStyled, MenuList };
export default MenuList;