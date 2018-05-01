import styled from 'styled-components';

const SubHeader = styled.header `
  position: fixed;
  top: 60px;
  left: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  font-size: 14px;
  line-height: 50px;
  color: white;
  background: ${props => props.theme.brandGrey};
  z-index: 887;
  ${props => props.theme.breakPointMD} {
    top: 80px;
  }}
  p, a, span {
    color: inherit;
    margin: 0;
  }
  .Wrapper > *:first-child {
    flex-grow: 2;
  }
`;

export default SubHeader;