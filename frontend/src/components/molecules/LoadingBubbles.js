import React from 'react';
import styled from 'styled-components';

import Bubble from 'components/atoms/Bubble';

const LoadingBubblesStyled = styled.div `
  display: flex;
  justify-content: center;
  & > div {
    animation: expandBubbles .75s ease-in-out infinite;
    &:nth-child(2) {
      animation-delay: 180ms;
    }
    &:nth-child(3) {
      animation-delay: 360ms;
    }
    &:nth-child(4) {
      animation-delay: 540ms;
    }
  }
  @keyframes expandBubbles {
    0% {
      transform: scale(1);
      background-color: white;
    }
    25% {
      transform: scale(1.55);
      background-color: #ffbe2f;
    }
  }
`;

const LoadingBubbles = () => {
  return (
    <LoadingBubblesStyled className="Bubbles" >
      <Bubble /><Bubble /><Bubble />
    </LoadingBubblesStyled>
  )
}

export default LoadingBubbles;