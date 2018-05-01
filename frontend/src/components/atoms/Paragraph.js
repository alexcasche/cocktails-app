import styled from 'styled-components';

const Paragraph = styled.p `
  margin: 10px 0;
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: ${props => props.theme.baseFontSize};
  color: ${props =>
    (props.light && 'white')
    || props.theme.brandNavy
  };
`;

export default Paragraph;