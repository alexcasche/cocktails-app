import React from 'react';
import { withTheme } from 'styled-components';

import SubHeader from '../SubHeader';
import Wrapper from 'components/atoms/Wrapper';
import Paragraph from 'components/atoms/Paragraph';
import FontAwesome from 'components/atoms/FontAwesome';
import SortMenu from './SortMenu';
import CreateButton from './CreateButton';

const SearchBar  = ({theme}) => {
  return (
    <SubHeader>
      <Wrapper className="Wrapper">
        <Paragraph>
          <FontAwesome left icon={theme.carretRightIcon}/>
          23 Results For 'Gin & Tonic'
        </Paragraph>
        <SortMenu />
        <CreateButton className="CreateButton">
          Create<FontAwesome right icon={theme.plusIcon} />
        </CreateButton>
      </Wrapper>
    </SubHeader>
  );
};

export default withTheme(SearchBar);