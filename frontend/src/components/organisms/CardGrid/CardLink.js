import React from 'react';
import { NavLink } from 'components/atoms/Links';
import styled from 'styled-components';

const CardLink = styled(({showDetails, ...props}) => 
  <NavLink {...props}/>
)`
  display: block;
  width: 100%;
  height: 100%;
  .CardImage {
    transform: ${props =>
      (props.showDetails && 'translateX(-50%) scale(1.1)')
      || 'translateX(-50%)'
    };
  }
  &:hover {
    opacity: 1;
    .CardImage {
      transform: translateX(-50%) scale(1.1);
    }
    .CardOverlay {
      opacity: 0;
    }
  }
`;

export default CardLink;