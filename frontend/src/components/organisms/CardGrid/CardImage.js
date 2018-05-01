import styled from 'styled-components';

const CardImage = styled.img `
  width: 102%;
  min-width: 275px;
  min-height: 100%;
  position: relative;
  left: 50%;
  will-change: transform, opacity;
  transition: transform .25s ease-in-out;
`;

export default CardImage;