import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { sendMessage, messageChanged, messageFetch } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class Chatroom extends Component {
  componentWillMount() {
    const { friend } = this.props;

    this.props.messageFetch(friend);
  }

  onMessageChange(text) {
    this.props.messageChanged(text);
  }

  onButtonPress() {
    const { friend, text } = this.props;

    this.props.sendMessage(text, friend);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Message"
            onChangeText={this.onMessageChange.bind(this)}
            value={this.props.text}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            送出!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { text } = state.message;
  const messageList = _.map(state.message.messageList, (val, uid) => {
    return { ...val, uid };
  });
  console.log('messageList', messageList);

  return { text, messageList };
};

export default connect(mapStateToProps, {
  sendMessage,
  messageChanged,
  messageFetch
})(Chatroom);
