import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddFriendReducer from './AddFriendReducer';

export default combineReducers({
  auth: AuthReducer,
  addfriend: AddFriendReducer
});
