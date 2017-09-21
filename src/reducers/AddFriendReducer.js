import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    // case PASSWORD_CHANGED:
    //   return { ...state, password: action.payload };
    // case LOGIN_USER_SUCCESS:
    //   return { ...state,
    //     user: action.payload,
    //     error: '',
    //     loading: false,
    //     email: '',
    //     password: ''
    //   };
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case ADD_FRIEND_LOADING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
