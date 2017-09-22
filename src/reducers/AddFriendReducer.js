import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED,
  ADD_FRIEND_MAIL,
  ADD_FRIEND_SUCCRSS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case ADD_FRIEND_SUCCRSS:
      return { INITIAL_STATE };
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case ADD_FRIEND_LOADING:
      return { ...state, loading: true, error: '' };
    case ADD_FRIEND_MAIL:
      return { ...state, mails: action.payload };
    default:
      return state;
  }
};
