import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import MessageHeader from '../../components/MessageHeader';
import MessageBubble from '../../components/MessageBubble';
import MessageInput from '../../components/MessageInput';

const ChatsScreen = () => {
  const { sender, message, date, timestamp } = useLocalSearchParams();
  const [messages, setMessages] = useState([
    { sender, message, timestamp, id: Date.now().toString() },
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now().toString(),
        sender: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <MessageHeader sender={sender} />

      <ScrollView contentContainerStyle={styles.messagesContainer}>
        <Text style={styles.date}>{date}</Text>

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.message} timestamp={msg.timestamp} />
        ))}
      </ScrollView>

      <MessageInput onSend={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  date: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    marginBottom: 12,
  },

  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
});

export default ChatsScreen;
