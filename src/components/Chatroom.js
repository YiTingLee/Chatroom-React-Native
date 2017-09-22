import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { sendMessage, messageChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class Chatroom extends Component {
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

  return { text };
};

export default connect(mapStateToProps, { sendMessage, messageChanged })(Chatroom);
