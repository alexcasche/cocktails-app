import CardTitle from './CardTitle';

const CardAuthorStyled = CardTitle.extend `
  text-transform: uppercase;
  font-size: 12px;
`;

const CardAuthor = CardAuthorStyled.withComponent('h3');

export default CardAuthor;