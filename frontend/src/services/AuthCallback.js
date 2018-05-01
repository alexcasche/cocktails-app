import React from 'react';
import history from 'routes/history';

import AccountLoading from 'components/pages/AccountLoading';

const AuthCallback = () => {
  
  accountRedirect();
  
  return (
    <div>
      <AccountLoading loadType="login">
        <p className="tagline">
          <em>Serving up your cocktails...</em>
        </p>
      </AccountLoading>
    </div>
  );
}

function accountRedirect() {
  setTimeout(() => { 
    history.replace("/account");
  }, 2500);
}

export default AuthCallback;