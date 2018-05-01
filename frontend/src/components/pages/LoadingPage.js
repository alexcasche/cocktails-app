import React from 'react';

import CoverImage from 'components/atoms/CoverImage';
import Overlay from 'components/atoms/Overlay';
import Logo from 'components/atoms/Logo';
import LoadingBubbles from 'components/molecules/LoadingBubbles';
import background from 'assets/background_loading.jpg';

const CoverLoading = CoverImage.extend `
  .Overlay {
    background: linear-gradient(to bottom, #181a34 0%, #313234 100%);
    opacity: .75;
    position: absolute;
    z-index: -1;
  }
`;

const LoadingPage = ({text}) => {

  let loadingText = (text) ? text : "Serving up your cocktails...";

  return (
    <CoverLoading background={background} >
      <Overlay className="Overlay" />
        <Logo />
        <p>{loadingText}</p>
        <LoadingBubbles />
    </CoverLoading>
  );
}

export default LoadingPage;