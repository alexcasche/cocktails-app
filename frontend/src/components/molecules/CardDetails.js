import React from "react";
import Truncate from 'react-truncate';
import styled, { withTheme } from 'styled-components';

import { Button } from 'components/atoms/Buttons';
import FontAwesome from 'components/atoms/FontAwesome';
import H3 from 'components/atoms/H3';
import Paragraph from 'components/atoms/Paragraph';

const CardDetailsStyled = styled.div `
  display: flex;
  padding: 20px;
  background: linear-gradient(to bottom, #181A34, #313234);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity .5s ease-in-out;
  opacity: ${props => 
    (props.showDetails && '.99')
    || '0'
  };
  pointer-events: ${props => 
    (props.showDetails && 'auto')
    || 'none'
  };
  .fa-glass-martini {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255,255,255,.04);
    z-index: -1;
    font-size: 65vw;
    ${props => props.theme.breakPointXS} {
      font-size: 32vw;
    }
    ${props => props.theme.breakPointMD} {
      font-size: 20vw;
    }
    ${props => props.theme.breakPointXL} {
      font-size: 16vw;
    }
  }
  button.close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    background-color: rgba(255,255,255,.85);
  }
  h3 , p {
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
  }
  h3 {
    margin-top: -10px;
    line-height: 27px;
    max-height: 54px;
  }
  .ingredients, .details {
    margin: 0 0 10px;
    font-size: 13px;
  }
  .details {
    font-weight: 600;
  }
  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > button {
      width: 33.3333%;
      border-radius: 0;
      will-change: box-shadow;
      box-shadow: inset 0 0 100px 20px rgba(0,0,0,0.15);
      &:hover {
        box-shadow: none;
      }
    }
    .like {
      background-color: ${props => props.theme.brandRed};
    }
    .add {
      background-color: ${props => props.theme.brandSilver};
    }
    .share {
      background-color: ${props => props.theme.brandGreen};
    }
  }
`;

const CardDetails = ({card, toggleDetails, showDetails, theme}) => {

  return (
    <CardDetailsStyled className="CardDetails" showDetails={showDetails}>
      <FontAwesome icon={theme.cocktailIcon} />
      <Button kind="action" circle small white className="close" onClick={toggleDetails}>
        <FontAwesome icon={theme.closeIcon} />
      </Button>
      <H3 light>
        <Truncate lines={2} ellipsis={<span>...</span>}>{card.name}</Truncate>
      </H3>
      <Paragraph light className="ingredients">
        <Truncate lines={2} ellipsis={<span>...</span>}>{card.ingredients}</Truncate>
      </Paragraph>
      <Paragraph light className="details">
        110 Calories | 25% Alcohol
      </Paragraph>
      <div className="controls">
        <Button kind="action" className="like">
          <FontAwesome icon={theme.heartSolidIcon} />
        </Button>
        <Button kind="action" className="add">
          <FontAwesome icon={theme.plusIcon} />
        </Button>
        <Button kind="action" className="share">
          <FontAwesome icon={theme.shareIcon} />
        </Button>
      </div>
    </CardDetailsStyled>
  );
}

export default withTheme(CardDetails);