import { combineReducers } from 'redux';

// reducer
import { login } from './reducers/login';
import { user } from './reducers/user';

export default combineReducers({
  login,
  user
});
