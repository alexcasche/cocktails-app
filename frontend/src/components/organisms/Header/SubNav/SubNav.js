import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from 'components/atoms/Wrapper';
import ExploreBar from './ExploreBar/ExploreBar';

const SubNavStyled = styled.section `
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  font-size: 14px;
  line-height: 50px;
  color: white;
  background: ${props => props.theme.brandGrey};
  box-sizing: content-box;
  border-top: 1px solid rgba(255,255,255,.05);
  p, a, span {
    color: inherit;
    margin: 0;
  }
`;

class SubNav extends Component {

  render() {
    return(
      <SubNavStyled className="SubNav">
        <Wrapper className="Wrapper" noMobile>
          <ExploreBar />
        </Wrapper>
      </SubNavStyled>
    );
  }
}

export default SubNav;