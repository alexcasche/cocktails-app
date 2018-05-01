import styled from 'styled-components';

const DropDownContent = styled.ul `
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height .5s ease-in-out;
  &::before {
    background-color: transparent;
    transition: background-color: .5s ease-in-out;
    transition-delay: .5s;
  }
  &.open {
    max-height: 250px;
    &::before {
      background-color: rgba(0,0,0,.1);
      display: block;
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
  li a {
    display: block;
    line-height: inherit;
    background-color: ${props => props.dark ? props.theme.brandLightGrey : '#fafafa'};
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${props => props.dark ? props.theme.brandGrey : '#fafafa'};
    &:hover {
      opacity: 1;
      background-color: ${props => props.dark ? '#54555a' : '#fafafa'};
    }
  }
`;

export default DropDownContent;

