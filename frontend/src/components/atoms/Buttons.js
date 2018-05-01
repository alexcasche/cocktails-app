import { NavLink as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button `
  width: ${props =>
  (props.fullWidth && '100%')
  || (props.circle && props.small && '26px')
  || (props.circle && props.large && '46px')
  || ((props.circle) && '36px')
  || 'auto'
  };
  height: ${props =>
    ((props.circle && props.small) && '26px')
    || ((props.circle && props.large) && '46px')
    || ((props.circle) && '36px')
    || 'auto'
    }; 
  padding: ${props =>
    (props.circle && '0')
    || (props.small && '8px 16px 9px')
    || (props.large && '10px 25px 11px')
    || '9px 18px 10px'
  };
  background-color: ${props =>
    (props.knockout && 'transparent')
    || (props.inverted && 'white')
    || (props.primary && props.theme.primary)
    || (props.secondary && props.theme.secondary)
    || (props.warning && props.theme.warning)
    || (props.danger && props.theme.danger)
    || (props.white && 'white')
    || (props.facebook && props.theme.facebookBG)
    || (props.twitter && props.theme.twitterBG)
    || 'white'
  };
  border-width: ${props => 
    ((props.inverted || props.knockout) && props.small && '1px')
    || ((props.inverted || props.knockout) && props.large && '3px')
    || ((props.inverted || props.knockout) && '2px')
    || '0'
  };
  border-style: solid;
  border-color: ${props =>
    ((props.inverted || props.knockout) && props.primary && props.theme.primary)
    || ((props.inverted || props.knockout) && props.secondary && props.theme.secondary)
    || ((props.inverted || props.knockout) && props.warning && props.theme.warning)
    || ((props.inverted || props.knockout) && props.danger && props.theme.danger)
    || (props.knockout && 'white')
    || 'transparent'
  };
  border-radius: ${props => props.circle ? '50%' : '2px'};
  color: ${props =>
    ((props.inverted || props.knockout) && props.primary && props.theme.primary)
    || ((props.inverted || props.knockout) && props.secondary && props.theme.secondary)
    || ((props.inverted || props.knockout) && props.warning && props.theme.warning)
    || ((props.inverted || props.knockout) && props.danger && props.theme.danger)
    || (props.white && props.theme.brandNavy)
    || 'white'
  };
  font-family: ${props => props.theme.fontSansPrimary};
  font-size: ${props => {
    const baseFontSize = parseInt(props.theme.baseFontSize, 10);
    return (props.small && `${baseFontSize * 0.85}px`)
      || props.theme.baseFontSize
  }};
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow .25s ease-in-out;
  &:hover {
    background-color: ${props =>
      ((props.inverted || props.knockout) && props.primary && props.theme.primary)
      || ((props.inverted || props.knockout) && props.secondary && props.theme.secondary)
      || ((props.inverted || props.knockout) && props.warning && props.theme.warning)
      || ((props.inverted || props.knockout) && props.danger && props.theme.danger)
      || ((props.inverted || props.knockout) && 'white')
    };
    color: ${props => 
      (props.inverted && 'white')
      || (props.knockout && props.theme.brandNavy)
    };
    box-shadow: ${props => (props.inverted || props.knockout) ? 'none' : 'inset 0 0 100px 20px rgba(0, 0, 0, 0.2)'};
    cursor: pointer;
  }
  &:active, &:focus {
    outline: none;
  }
`;

const NavButton = Button.withComponent(ReactLink);

export { Button, NavButton };
