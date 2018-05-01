import styled from 'styled-components';

const SecondaryNav = styled.div `
  margin: auto;
  & > * {
    height: 50px;
  }
  .MenuNav {
    display: none;
    a.active span {
      padding: 0 3px 11px;
      border-bottom: 5px solid #ffbe2f;
    }
  }
  .DropDown {
    width: 100vw;
    text-align: center;
    i {
      color: ${props => props.theme.brandGold};
    }
  }
  ${props => props.theme.breakPointMD} {
    .MenuNav { display: flex; }
    .DropDown { display: none; }
`;

export default SecondaryNav;