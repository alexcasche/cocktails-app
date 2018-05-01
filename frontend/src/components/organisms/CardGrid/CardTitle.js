import styled from 'styled-components';

const CardTitle = styled.h2 `
  margin: 4px 0;
  width: calc(100% - 85px);
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export default CardTitle;