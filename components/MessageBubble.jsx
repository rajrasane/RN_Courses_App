import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBubble = ({ message, timestamp }) => {
  return (
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBubble: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '85%',
    elevation: 0.7,
  },
  messageText: {
    fontSize: 16.7,
    lineHeight: 25,
    marginTop: -5,
  },
  timestamp: {
    fontSize: 10,
    textAlign: 'right',
    color: 'gray',
    marginTop: -2,
    marginBottom : -4
  },
});

export default MessageBubble;
