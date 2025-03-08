import React, { useState, useRef, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleSend = useCallback(() => {
    if (message.trim().length > 0) {
      onSend(message.trim());
      setMessage('');
      inputRef.current?.clear(); // Clear input directly
    }
  }, [message, onSend]);

  return (
    <View style={styles.container}>
      {/* Attachment Button */}
      <TouchableOpacity style={styles.attachmentButton}>
        <Ionicons name="attach-outline" size={26} color="gray" />
      </TouchableOpacity>

      {/* Message Input */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Write something here ..."
        value={message}
        onChangeText={(text) => text.length <= 500 && setMessage(text)} // Limit message length
        keyboardType="default"
        blurOnSubmit={false}
        multiline
      />

      {/* Voice Button */}
      <TouchableOpacity style={styles.voiceButton}>
        <Ionicons name="mic-outline" size={26} color="gray" />
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Ionicons name="send" size={23} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    fontSize: 16,
  },
  attachmentButton: { marginRight: 10 },
  voiceButton: { marginLeft: 10 },
  sendButton: { marginLeft: 14 , marginRight: 3 },
});

export default MessageInput;
