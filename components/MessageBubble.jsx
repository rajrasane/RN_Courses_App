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
    elevation: 1.1,
  },
  messageText: {
    fontSize: 18,
    lineHeight: 26,
  },
  timestamp: {
    fontSize: 12,
    textAlign: 'right',
    color: 'gray',
    marginTop: 5,
  },
});

export default MessageBubble;
