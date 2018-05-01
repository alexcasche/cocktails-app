import React from 'react';
import { withTheme } from 'styled-components';

import { Button } from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';

const SearchButtonStyled = Button.extend `
  background: transparent;
  padding: 0;
  height: 60px;
  padding: 0 15px;
  width: auto;
  position: absolute;
  top: 0;
  right: 70px;
  font-size: 20px;
  color: #ddd;
  transition: opacity .25s ease-in-out;
  overflow: hidden;
  pointer-events: none;
  &:hover {
    box-shadow: none;
    opacity: .5;
  }
  ${props => props.theme.breakPointMD} {
    top: 0;
    left: 203px;
    color: #aaa;
    pointer-events: auto;
    height: 80px;
  }
`;

const SearchButton = ({theme, toggleNav}) => {
  return (
    <SearchButtonStyled onClick={toggleNav}>
      <FontAwesome icon={theme.searchIcon} />
    </SearchButtonStyled>
  );
};

export default withTheme(SearchButton);