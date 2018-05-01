import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

import BaseWrapper from 'components/atoms/wrappers/BaseWrapper';

import FontAwesome from 'components/atoms/FontAwesome';
import TextField from 'components/atoms/fields/TextField';

const SearchBarStyled = styled.form `
  width: 100%;
  height: 40px;
  background-color: white;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
  z-index: 888;
  i {
    width: 20px;
    line-height: 38px;
    margin-right: 10px;
    color: ${props => props.theme.brandGrey};
    opacity: .95;
  }
  input {
    height: 40px;
    padding: 0;
    border: none;
    color: ${props => props.theme.baseFontColor};
    font-size: ${props => props.theme.baseFontSize};
    &:focus, &:active {
      border: none;
      outline: none;
    }
    &::placeholder {
      color: ${props => props.theme.brandGrey};
      opacity: .85;
      font-style: italic;
    }
  }
`;

class SearchBar extends Component {

  render() {
    return (
      <SearchBarStyled className="SearchBar">
        <BaseWrapper>
          <FontAwesome icon={this.props.theme.searchIcon} />
          <TextField placeholder="Search cocktails, ingredients..."/>
        </BaseWrapper>
      </SearchBarStyled>
    );
  }
}

export default withTheme(SearchBar);