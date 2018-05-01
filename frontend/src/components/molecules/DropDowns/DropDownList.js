import React from 'react';
import styled from 'styled-components';

import { WebLink } from 'components/atoms/Links';
import DropDownContent from './DropDownContent';

const DropDownStyled = styled.div `
  text-align: ${props => 
    (props.left && 'left')
    || (props.right && 'right')
    || 'center'
  };
  a.active {
    display: none;
  }
`;

const DropDownList = ({links, ...rest}) => {
  const dropDownLinks = links.map((link) => {
    return (
      <li>
        <WebLink key={link.name} to={link.url}>{link.name}</WebLink>
      </li>
    )
  });
  return (
    <DropDownStyled className="DropDown">
      <DropDownContent className="DropDownContent"{...rest}>
        { dropDownLinks }
      </DropDownContent>
    </DropDownStyled>
  );
}

export { DropDownStyled };
export default DropDownList;