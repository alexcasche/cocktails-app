import React from 'react';
import { FieldStyled } from './TextField'; 

const RadioButtonStyled = FieldStyled.extend `
  width: 100%;
  height: 40px;
  padding: 0 14px;
  line-height: 1.5;
  font-size: .85em;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  border-radius: 3px;
  transition: all .8s ease-in-out;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.brandNavy};
  }
;`

const RadioButton = (props) => {
  return (
    <RadioButtonStyled type="radio" {...props} />
  )
}

export default RadioButton;