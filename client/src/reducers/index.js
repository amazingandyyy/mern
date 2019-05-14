import { combineReducers } from 'redux';

import auth from './auth_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  auth,
  user
});

export default rootReducer;
