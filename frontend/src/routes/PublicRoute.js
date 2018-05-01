import React from 'react';
import { Route } from 'react-router-dom';


/*  global localStorage  */

const PublicRoute = ({ template: Template, component: Component, ...rest }) => {
  
  return (
    <Route {...rest} render={matchProps => (
        <Template><Component {...matchProps} /></Template>
    )} />    
  )
}

export default PublicRoute;
