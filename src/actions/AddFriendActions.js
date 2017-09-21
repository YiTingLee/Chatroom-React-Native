import _ from 'lodash';
import firebase from 'firebase';
import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED,
  ADD_FRIEND_MAIL
} from './types';

export const addFriend = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: ADD_FRIEND_LOADING });

    firebase.database().ref(`/users/mail`)
      .on('value', snapshot => {
        const value = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });

        value.forEach((v) => {
          if (email === v.email) {
            addFriendSuccess(firebase.auth().currentUser.email, v.email);
          }
        });

        dispatch({
          type: ADD_FRIEND_MAIL,
          payload: value
        });
      });
  };
};

export const addEmailChanged = (text) => {
  return {
    type: ADD_EMAIL_CHANGED,
    payload: text
  };
};

const addFriendSuccess = (email1, email2) => {
  console.log(email1, email2);
};
