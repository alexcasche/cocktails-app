import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { accessGranted } from 'helpers/';

const UserRoute = ({ userRoles, template: Template, component: Component, ...rest }) => {

  console.log(accessGranted("user"));

  return (
    <Route {...rest} render={matchProps => (
      accessGranted("user") !== -1
        ? <Template><Component {...matchProps}/></Template>
        : <Redirect to="/" />
    )} />    
  )
}

export default UserRoute;