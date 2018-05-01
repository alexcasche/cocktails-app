import React, { Component } from 'react';
import styled from 'styled-components';

const FieldStyled = styled.input `
  width: 100%;
  padding: 9px 14px;
  line-height: 1.5;
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: .85em;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  border-radius: 3px;
  transition: border-color .8s ease-in-out;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.brandNavy};
  }
;`

class TextField extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <FieldStyled className="field" type="text" {...this.props} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default TextField; 
export { FieldStyled };