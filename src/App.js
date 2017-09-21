import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAb0Y-9HFmJSBLyVv6k2ttE2a3u4Y70mMo',
      authDomain: 'chatroom-efc7b.firebaseapp.com',
      databaseURL: 'https://chatroom-efc7b.firebaseio.com',
      projectId: 'chatroom-efc7b',
      storageBucket: 'chatroom-efc7b.appspot.com',
      messagingSenderId: '297667112953'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
