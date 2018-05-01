import React from 'react';
import { withTheme } from 'styled-components';

import DropDownList from 'components/molecules/DropDowns/DropDownList';

import { WebLink } from 'components/atoms/Links';
import FontAwesome from 'components/atoms/FontAwesome';

const SortMenu = ({theme, ...rest}) => {
  return (
    <DropDownList>
      <WebLink>
        Sort<FontAwesome right icon={theme.carretDownIcon} />
      </WebLink>
    </DropDownList>
  );
};

export default withTheme(SortMenu);