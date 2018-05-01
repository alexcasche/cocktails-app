import styled from 'styled-components';

const H2 = styled.h2 `
  margin: 0 0 10px;
  color: ${props =>
    (props.light && 'white')
    || props.theme.brandNavy
  };
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: 18px;
  font-weight: 600;
`;

export default H2;