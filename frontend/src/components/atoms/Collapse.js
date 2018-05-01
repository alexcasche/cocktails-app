import styled from 'styled-components';

const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  left: ${props => 
  (props.left && '-100vw')
  || (props.right && '100vw')
  };
  width: 100%;
  transform: translateX(0);
  transition: transform .4s ease-in-out;
  z-index: -1;
  &.open {
    position: fixed;
    height: calc(100vh - 88px);
    transform: ${props => 
    (props.left && 'translateX(100%)')
    || (props.right && 'translateX(-100%)')
    };
    overflow-y: scroll;
  }
  ${props => props.theme.breakPointLG} {
    &, &.open {
      flex-direction: row;
      position: relative;
      top: 0;
      left: 0;
      height: auto;
      transform: none;
      transition: none;
      z-index: initial;
    }
  }
`;

export default Collapse;