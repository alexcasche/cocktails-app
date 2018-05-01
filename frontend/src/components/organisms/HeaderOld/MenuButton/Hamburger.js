import styled from 'styled-components';

const Hamburger = styled.span `
  position: relative;
  top: 0;
  right: 0;
  &,
  &::before,
  &::after {
    pointer-events: none;
    display: block;
    height: 2px;
    width: 30px;
    background: white;
    border-radius: 1px;
    content: '';
    transition: all .5s ease-in-out, opacity .25s ease-in-out;
  };
  &::before, &::after {
    position: absolute;
  }
  &::before {
    margin: 0;
    top: -9px;
  };
  &::after {
    margin: 0;
    bottom: -9px;
  };
  &.open {
    background: transparent;
    &::before {
      top: 0;
      transform: rotate(45deg);
    };
    &::after {
      top: 0;
      transform: rotate(-45deg);
    };
  };
`;

export default Hamburger;