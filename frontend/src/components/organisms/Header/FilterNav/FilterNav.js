import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/atoms/Wrapper';

const FilterNavStyled = styled.section `
  height: 0;
  width: 100%;
  background: ${props => props.theme.brandLightGrey};
  color: white;
  transition: height .5s ease-in-out, padding .5s ease-in-out;
  overflow: hidden;
  &.open {
    padding: 40px 0;
    height: 350px;
  }
`;

const FilterNav = ({showFilterNav}) => {

  return (
    <FilterNavStyled className={showFilterNav ? 'FilterNav open': 'FilterNav'}>
      <Wrapper>
        <div>Filter Nav</div>
      </Wrapper>
    </FilterNavStyled>
  );
}

export default FilterNav;