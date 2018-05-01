import styled from 'styled-components';

const CoverImage = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  min-height: 450px;
  overflow-y: scroll;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  background-position: center;
  z-index: 999;
`;

export default CoverImage;