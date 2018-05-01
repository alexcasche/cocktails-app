import { Link as ReactLink, NavLink as ReactNav } from 'react-router-dom';
import styled from 'styled-components';

const WebLink = styled.a`
  font-family: ${props => props.theme.fontSansPrimary};
  color: ${props => props.theme.primary};
  opacity: 1;
  cursor: pointer;
  transition: opacity .25s ease-in-out, background-color .25s ease-in-out;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: .5;
  }
`;

const Link = WebLink.withComponent(ReactLink);
const NavLink = WebLink.withComponent(ReactNav);

export { WebLink, Link, NavLink };