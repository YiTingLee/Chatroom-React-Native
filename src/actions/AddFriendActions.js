import _ from 'lodash';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED,
  ADD_FRIEND_MAIL,
  ADD_FRIEND_SUCCRSS
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
            addFriendSuccess(dispatch, firebase.auth().currentUser, v);
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

const addFriendSuccess = (dispatch, user, friend) => {
  console.log('user:', user);
  console.log('friend:', friend);
  const chatroomId = rendomId(1, 100000);

  firebase.database().ref(`user/${user.uid}/friends`)
  .push({ id: friend.email, uid: friend.uid, chatroomId })
  .then(() => {
    firebase.database().ref(`user/${friend.uid}/friends`)
      .push({ id: user.email, uid: user.uid, chatroomId })
      .then(() => {
        dispatch({ type: ADD_FRIEND_SUCCRSS });
        Actions.main({ type: 'reset' });
      });
  });
};

const rendomId = (min, max) => {
  return (Math.random() * (max - min)) + min;
};
