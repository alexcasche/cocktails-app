import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './history';

import EmptyLayout from 'components/templates/EmptyLayout';
import BaseLayout from 'components/templates/BaseLayout';

import PublicRoute from './PublicRoute';
// import UserRoute from './UserRoute';
// import AdminRoute from './AdminRoute';

/*  PUBLIC ROUTES  */
import ExplorePage from 'components/pages/ExplorePage';
import LoadingPage from 'components/pages/LoadingPage';

/*  USER ROUTES  */


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>

        {/*  PUBLIC ROUTES  */}
        <PublicRoute exact path="/" template={BaseLayout} component={ExplorePage} />
        <PublicRoute path="/explore/featured" template={BaseLayout} component={ExplorePage} />
        <PublicRoute path="/explore/newest" template={BaseLayout} component={ExplorePage} />
        <PublicRoute path="/explore/popular" template={BaseLayout} component={ExplorePage} />
        <PublicRoute path="/explore/trending" template={BaseLayout} component={ExplorePage} />
        <PublicRoute path="/loading" template={EmptyLayout} component={LoadingPage} />
        
        {/*  USER ROUTES  */}

        
      </Switch>
    </Router>
  );
}

export default Routes;
