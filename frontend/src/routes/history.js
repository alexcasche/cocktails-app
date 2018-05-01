import createHistory from 'history/createBrowserHistory';
import store from 'redux/store';
import { setEnv, storeRoute } from 'actions/app_actions';
import { getBaseRoute } from 'helpers/';

const history = createHistory();

store.dispatch(storeRoute(history.location));
store.dispatch(setEnv(getBaseRoute(history.location.pathname)));

history.listen((location, action) => {
  store.dispatch(storeRoute(location));
  store.dispatch(setEnv(getBaseRoute(location.pathname)));
})

export default history;