import React from 'react';
import styled from 'styled-components';

import MenuNav from "components/molecules/Menus/MenuNav";
// import DropDownNav from "components/molecules/DropDowns/DropDownNav";
import links from './ExploreLinks';

const ExploreBarStyled = styled.div `
  width: 100%;
  .Menu { display: none; }
    
  }
  .DropDown {
    width: 100%;
    text-align: center;
    .DropDownContent li {
      
      i {
        color: ${props => props.theme.brandGold};
      }
    }
  }
  ${props => props.theme.breakPointMD} {
    width: auto;
    margin: auto;
    .Menu { 
      display: flex; 
      a {
        span {
          padding: 0 3px;
        }
        &.active span {
          padding: 0 3px 11px;
          border-bottom: 5px solid #ffbe2f;
        }
      }
    }
    .DropDown { display: none; }
  }
`;

const ExploreBar  = () => {
  return (
    <ExploreBarStyled className="ExploreBar">
      <MenuNav links={links}/>
      {/*<DropDownNav dark links={links} />*/}
    </ExploreBarStyled>
  );
};

export default ExploreBar;