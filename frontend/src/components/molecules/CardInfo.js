import React from 'react';
import styled, { withTheme } from 'styled-components';

import H2 from 'components/atoms/H2';
import H3 from 'components/atoms/H3';
import { ActionButton as Button} from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';

const CardInfoStyled = styled.div `
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px 0 15px 15px;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  h2, h3 {
    margin: 4px 0;
    width: calc(100% - 85px);
  }
  .triangle {
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
  }
`;

const CardInfo = ({theme, card, toggleDetails}) => {

  return (
    <CardInfoStyled>
      <H2 light>{card.name}</H2>
      <H3 light>@pourguide</H3>
      <div className="triangle">
        <Button kind="action" onClick={toggleDetails} >
        </Button>
        <FontAwesome icon={theme.infoIcon} />
      </div>
    </CardInfoStyled>
  );
}

export default withTheme(CardInfo);