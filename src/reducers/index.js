import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddFriendReducer from './AddFriendReducer';
import FriendReducer from './FriendReducer';

export default combineReducers({
  auth: AuthReducer,
  addfriend: AddFriendReducer,
  friend: FriendReducer
});
