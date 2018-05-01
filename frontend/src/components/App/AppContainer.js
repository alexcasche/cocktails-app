import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { appSetup } from './appSetup';
// import { loadingComplete } from 'helpers/'

import App from './App';
// import Loading from 'components/Loading/LoadingPage';


import theme from 'themes/global_theme';

class AppContainer extends Component {
  componentWillMount() {
    appSetup();
  }
  componentDidMount() {
    // loadingComplete();
  }
  render() {

    return (
      <ThemeProvider theme={theme}>
        {/*<Loading loadType="preload" >
          <p className="tagline">
            <em>The Cocktail Encyclopedia<span>TM</span></em>
          </p>
        </Loading>*/}
        <App />
      </ThemeProvider>
    );
  }
}

export default AppContainer;