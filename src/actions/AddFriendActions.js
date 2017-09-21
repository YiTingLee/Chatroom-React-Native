import firebase from 'firebase';
import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED
} from './types';

export const addFriend = ({ email }) => {
  return {
    type: ADD_FRIEND_LOADING,
    payload: email
  };
};

export const addEmailChanged = (text) => {
  return {
    type: ADD_EMAIL_CHANGED,
    payload: text
  };
};
