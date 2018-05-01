import React from 'react';
import styled from 'styled-components';

const FieldGroupStyled = styled.div `
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0;
  }
  ${props => props.theme.breakPointMD} {
    flex-direction: row;
    & > *:not(:first-child) {
      margin-left: 20px;
    }
  }
;`

const FieldGroup = ({children}) => {
  return (
    <FieldGroupStyled>
      {children}
    </FieldGroupStyled>
  );
};

export default FieldGroup;