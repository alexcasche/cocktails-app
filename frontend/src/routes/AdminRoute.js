import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { accessGranted } from 'helpers/'

const AdminRoute = ({ template: Template, component: Component, ...rest }) => {
  
  return (
    <Route {...rest} render={matchProps => (
      accessGranted("admin") !== -1
        ? <Template><Component {...matchProps} /></Template>
        : <Redirect to="/" />
    )} />    
  )
}

export default AdminRoute;
