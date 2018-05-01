import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Button } from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';

const CardButtonStyled = styled.div `
  width: 75px;
  padding-bottom: 75px;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  button {
    position: absolute;
    bottom: -106px;
    width: 150px; 
    height: 150px;
    background-color: ${props => props.theme.brandYellow};
    border-radius: 0;
    transform: rotate(45deg);
    opacity: .9;
    transition: opacity .25s ease-in-out;
    will-change: opacity;
    &:hover {
      opacity: 1;
      box-shadow: none;
      & + i {
        opacity: 1;
      }
    }
    & + i {
      position: absolute;
      bottom: 12px;
      right: 12px;
      font-size: 22px;
      color: white;
      transition: opacity .25s ease-in-out;
      opacity: .5;
      pointer-events: none;
    }
  }
`;

const CardButton = ({toggleDetails, theme}) => {

  return (
    <CardButtonStyled>
      <Button onClick={toggleDetails} />
      <FontAwesome icon={theme.infoIcon} />
    </CardButtonStyled>
  );
};

export default withTheme(CardButton);