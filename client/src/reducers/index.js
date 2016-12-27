import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import auth from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;
