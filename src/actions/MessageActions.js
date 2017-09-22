import firebase from 'firebase';
import moment from 'moment';
import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_CHANGED
} from './types';

export const messageChanged = (text) => {
  return {
    type: SEND_MESSAGE_CHANGED,
    payload: text
  };
};

export const sendMessage = (text, friend) => {
  const { currentUser } = firebase.auth();
  const lastMessageTime = moment().unix();
  return (dispatch) => {
    firebase.database().ref(`/chatroom/${friend.chatroomId}`)
      .push({ mail: currentUser.email, text, lastMessageTime })
      .then(() => {
        dispatch({ type: SEND_MESSAGE_SUCCESS });
      });
  };
};
