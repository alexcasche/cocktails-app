import React from 'react';
import styled from 'styled-components';

const FontAwesomeStyled = styled.i `
  display: initial;
  margin: ${props => 
    (props.left && '0 .65em 0 0')
    || (props.right && '0 0 0 .65em')
    || (props.center && '0 .65em')
    || '0'
  };
;`

const FontAwesome = ({icon, ...rest}) => {
  console.log(...rest);
  return (
    <FontAwesomeStyled {...rest} className={icon} />
  )
}

export default FontAwesome;
export { FontAwesomeStyled };