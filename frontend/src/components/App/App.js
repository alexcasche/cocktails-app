import React from 'react';
import HttpsRedirect from 'react-https-redirect';

import 'styles/resets.css';

import Routes from 'routes/routes';

const App = () => {
  return (
    <HttpsRedirect>
      <Routes />
    </HttpsRedirect>
  );
}

export default App;
