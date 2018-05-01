import React from 'react';
import { withTheme } from 'styled-components';

import { Link } from 'components/atoms/Links';
import Avatar from 'components/atoms/Avatar';
import FontAwesome from 'components/atoms/FontAwesome';

const ProfileLinkStyled = Link.extend `
  display: none;
  position: absolute;
  right: 100px;
  top: 17px;
  text-align: right;
  line-height: 44px;
  color: white;
  font-size: 15px;
  .Avatar {
    height: 36px;
    width: 36px;
    vertical-align: middle;
  }
  span {
    display: none;
    margin-left: 10px;
  }
  i {
    margin-left: 8px;
  }
  ${props => props.theme.breakPointMD} {
    display: block;
  }
  ${props => props.theme.breakPointLG} {
    span {
      display: inline-block;
    }
  }
`;

const ProfileLink = ({user, theme}) => {
  return (
    <ProfileLinkStyled to="/">
      <Avatar src={user.picture} className="Avatar" />
      <span>alexandercasche</span>
      <FontAwesome icon={theme.carretDownIcon} />
    </ProfileLinkStyled>
  );
}

export default ProfileLink;