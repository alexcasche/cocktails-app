import React from 'react';
import { withTheme } from 'styled-components';

import { Link } from 'components/atoms/Links';
import { Button } from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';

const SearchButtonStyled = Button.extend `
  background: transparent;
  padding: 0;
  height: 100%;
  padding: 0 15px;
  width: auto;
  position: absolute;
  top: 0;
  right: 70px;
  font-size: 20px;
  color: #ddd;
  transition: opacity .25s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: none;
    opacity: .5;
  }
  a {
    pointer-events: none;
    color: #ddd;
  }
  ${props => props.theme.breakPointMD} {
    top: 0;
    left: 203px;
    color: #aaa;
    pointer-events: none;
    a {
      pointer-events: auto;
    }
  }
`;

const SearchButton = ({theme}) => {
  return (
    <SearchButtonStyled>
      <Link to="/search">
        <FontAwesome icon={theme.searchIcon} />
      </Link>
    </SearchButtonStyled>
  );
};

export default withTheme(SearchButton);