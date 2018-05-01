import { combineReducers } from 'redux';
import sample_cocktails from './sample_cocktails';
import user_reducer from './user_reducer';
import app_reducer from './app_reducer';

const rootReducer = combineReducers({
  app: app_reducer,
  cocktails: sample_cocktails,
  user: user_reducer
});

export default rootReducer;