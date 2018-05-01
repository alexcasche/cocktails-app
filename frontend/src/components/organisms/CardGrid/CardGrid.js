import React from "react";
import styled from 'styled-components';

import Card from './Card';

const CardGridStyled = styled.div `
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: inline-block;
    margin: 0;
    flex-basis: 100vw;
    height: 100vw; 
    min-height: 275px;
    ${props => props.theme.breakPointXS} {
      flex-basis: calc(100vw / 2);
      height: calc(100vw / 2);
    }
    ${props => props.theme.breakPointMD} {
      flex-basis: calc(100vw / 3);
      height: calc(100vw / 3);
    }
    ${props => props.theme.breakPointXL} {
      flex-basis: calc(100vw / 4);
      height: calc(100vw / 4);
    }
  }
`;

const CardGrid = ({cards}) => {
  const cardItems = cards.map((card, index) => {
    return (
      <Card key={index} card={card} />
    )
  });
  return (
    <CardGridStyled>
      {cardItems}
    </CardGridStyled>
  );
}

export default CardGrid;