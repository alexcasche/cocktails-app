import React from 'react';
import styled from 'styled-components';

import CardTitle from './CardTitle';
import CardAuthor from './CardAuthor';
import CardButton from './CardButton';

const CardFooterStyled = styled.div `
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px 0 15px 15px;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
`;

const CardFooter = ({card, toggleDetails}) => {
  return (
    <CardFooterStyled>
      <CardTitle>{card.name}</CardTitle>
      <CardAuthor>@pourguide</CardAuthor>
      <CardButton toggleDetails={toggleDetails} />
    </CardFooterStyled>
  );
};

export default CardFooter;