import styled from 'styled-components';

const H3 = styled.h3 `
  margin: 0 0 10px;
  color: ${props =>
    (props.light && 'white')
    || props.theme.brandNavy
  };
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: 16px;
  font-weight: 600;
`;

export default H3;