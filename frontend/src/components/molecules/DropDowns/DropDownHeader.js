import React from 'react';
import { withTheme } from 'styled-components';

import H2 from 'components/atoms/H2';
import FontAwesome from 'components/atoms/FontAwesome';

const DropDownHeaderStyled = H2.extend `
  font-size: inherit;
  font-weight: normal;
  margin: 0;
  width: 100%;
  position: relative;
  height: inherit;
  z-index: 2;
  background-color: ${props => props.dark ? props.theme.brandGrey : '#fafafa'};
  color: ${props => props.dark ? 'white' : props.brandGrey };
  i {
    color: ${props => props.dark ? props.theme.brandGold : props.theme.brandGrey};
  }
  &:hover {
    cursor: pointer;
  }
`;

const DropDownHeader = ({theme, activeLink, ...rest}) => {
  return(
    <DropDownHeaderStyled {...rest}>
      <span>{activeLink}<FontAwesome icon={theme.carretDownIcon}/></span>
    </DropDownHeaderStyled>
  );
}

export default withTheme(DropDownHeader);