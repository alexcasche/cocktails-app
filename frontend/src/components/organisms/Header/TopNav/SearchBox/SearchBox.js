import React, { Component } from 'react';

import { FieldStyled } from 'components/atoms/TextField';
import SearchButton from './SearchButton';

const SearchBoxStyled = FieldStyled.extend `
  width: 410px;
  padding: 0 20px 0 50px;
  background: transparent;
  border: none;
  border-radius: 0;
  color: white;
  font-size: 17px;
  font-weight: 500;
  margin-left: 20px;
  transition: background .5s ease-in-out;
  &::placeholder {
    color: #ddd;
  }
  display: none;
  ${props=> props.theme.breakPointMD} {
    display: block;
  };
  &:focus {
    background: rgba(255, 255, 255, 0.25);
  }
`;



class SearchBox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return [
      <SearchBoxStyled key="searchBox" placeholder="Search cocktails, ingredients, and more…" />,
      <SearchButton key="searchButton" toggleNav={this.props.toggleNav} />
    ];
  }
};

export default SearchBox;
