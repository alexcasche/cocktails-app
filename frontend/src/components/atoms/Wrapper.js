import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  width: 100%;
  height: inherit;
  padding: ${props => (props.noMobile) ? '0' : '0 30px'};
  ${props => props.theme.breakPointMD} {
    padding: 0 40px;
  };
  ${props => props.noMobile} {

  }
`;

export default Wrapper;